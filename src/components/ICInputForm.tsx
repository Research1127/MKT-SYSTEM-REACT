import React, { useState } from "react";

interface Props {
  onSubmit: (ic: string) => void;
}

const ICInputForm: React.FC<Props> = ({ onSubmit }) => {
  const [icNumber, setIcNumber] = useState("");

  const handleSubmit = () => {
    onSubmit(icNumber);
  };

  return (
    <div>
      <label htmlFor="icNumber" className="sr-only">
        IC Number
      </label>
      <input
        id="icNumber"
        name="icNumber"
        type="text"
        placeholder="Enter IC"
        value={icNumber}
        onChange={(e) => setIcNumber(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Check
      </button>
    </div>
  );
};

export default ICInputForm;
