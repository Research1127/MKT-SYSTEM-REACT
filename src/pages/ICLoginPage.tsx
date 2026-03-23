import ICInputForm from "../components/ICInputForm";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import axios from "axios";
import type { Student } from "../types/StudentTypes";

const ICLoginPage = () => {
  const navigate = useNavigate();

  const handleICSubmit = async (icNumber: string) => {
    try {
      const response = await api.get<Student>(`/api/payments/${icNumber}`);

      console.log("IC Found:", response.data);

      // Save student data temporarily
      localStorage.setItem("student", JSON.stringify(response.data));

      // Navigate to summary page
      navigate("/payment-summary");
    } catch (error) {
      let errorMessage = "IC not found";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || "IC not found";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error("IC Check Failed:", errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Payment Checker
        </h2>

        <ICInputForm onSubmit={handleICSubmit} />
      </div>
    </div>
  );
};

export default ICLoginPage;
