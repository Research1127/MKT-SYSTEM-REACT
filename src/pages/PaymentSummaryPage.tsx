import type { Student } from "../types/StudentTypes";

const PaymentSummaryPage = () => {
  // Step 1: get student from localStorage
  const student: Student | null = JSON.parse(
    localStorage.getItem("student") || "null",
  );

  // Step 2: check if student exists
  if (!student) {
    return (
      <div className="p-10 text-center text-red-600">
        No student found. Please login first.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Student Info */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Payment Summary</h1>

          <div className="text-gray-700 space-y-1">
            <div>
              <span className="inline-block w-24 font-semibold">Name</span> :{" "}
              {student.name}
            </div>
            <div>
              <span className="inline-block w-24 font-semibold">IC</span> :{" "}
              {student.icNumber}
            </div>
          </div>
        </div>

        {/* Payment Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 border">Month</th>
                <th className="py-2 px-4 border">Year</th>
                <th className="py-2 px-4 border">Paid Amount</th>
                <th className="py-2 px-4 border">Due Amount</th>
                <th className="py-2 px-4 border">Outstanding Amount</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {student.payments.map((payment, index) => (
                <tr
                  key={`${payment.month}-${payment.year}`}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="py-2 px-4 border">{payment.month}</td>
                  <td className="py-2 px-4 border">{payment.year}</td>
                  <td className="py-2 px-4 border">
                    RM {payment.paidAmount.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border">
                    RM {payment.dueAmount.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border">
                    RM {payment.outstandingAmount.toFixed(2)}
                  </td>
                  <td
                    className={`py-2 px-4 border font-semibold ${
                      payment.paymentStatus === "Paid"
                        ? "text-green-600"
                        : payment.paymentStatus === "Partially"
                          ? "text-yellow-600"
                          : "text-red-600"
                    }`}
                  >
                    {payment.paymentStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Summary */}
        <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-inner">
          <div>
            <p className="text-gray-700 font-semibold">Total Due Amount:</p>
            <p className="text-lg font-bold text-blue-600">
              RM {student.totalDue.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Total Outstanding:</p>
            <p className="text-lg font-bold text-red-600">
              RM {student.totalOutstanding.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Bottom button area */}
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Go to Google Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummaryPage;
