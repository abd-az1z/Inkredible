import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../Admin/Admin";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Render Admin Component directly */}
      <Route path="/*" element={<Admin />} />
    </Routes>
  );
};

export default AdminRoutes;
