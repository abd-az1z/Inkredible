import React from "react";
import Achievements from "./Achievements";
import MonthlyOverview from "./MonthlyOverview.JSX";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Achievements Card */}
        <div className="col-span-1">
          <Achievements />
        </div>
        <div className="col-span-2">
          <MonthlyOverview />
        </div>
      </div>
      
    </div>
  );
};

export default AdminDashboard;