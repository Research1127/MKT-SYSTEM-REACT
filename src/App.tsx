import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ICLoginPage from "./pages/ICLoginPage";
import PaymentSummaryPage from "./pages/PaymentSummaryPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ICLoginPage />} />
        <Route path="/payment-summary" element={<PaymentSummaryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
