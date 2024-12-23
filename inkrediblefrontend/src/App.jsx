import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes/CustomerRoutes";
import AdminRoutes from "./Routers/AdminRoutes/AdminRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Customer routes */}
        <Route path="/*" element={<CustomerRoutes />} />
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;