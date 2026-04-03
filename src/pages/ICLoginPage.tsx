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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Pendaftaran Pelajar
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Masukkan nombor IC tanpa dash (contoh: 010203041234)
          </p>
        </div>

        {/* IC Form */}
        <ICInputForm onSubmit={handleICSubmit} />

        {/* Helper text under form */}
        <p className="text-xs text-gray-400 mt-3 text-center">
          Format: 12 digit nombor sahaja, tanpa simbol (-)
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-3 text-sm text-gray-400">ATAU</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Form Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdP3aN3HCEybSRlZYvW5NSHfS1ydKn9Ol1niKXHkO9YKxHonA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg">
            Pelajar Baru 2026
          </button>
        </a>
      </div>
    </div>
  );
};

export default ICLoginPage;
