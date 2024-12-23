import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const WeeklyOverview = () => {
  const data = [20, 40, 60, 30, 70, 50, 60]; // Weekly performance data

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Weekly Overview</h2>
        </div>
        <button className="text-gray-300 hover:text-white">
          <CiMenuKebab />
        </button>
      </div>

      {/* Chart */}
      <div className="relative h-40 mb-6">
        <div className="absolute bottom-0 w-full flex justify-between">
          {data.map((value, index) => (
            <div
              key={index}
              className={`bg-gray-600 ${
                index === 4 ? "bg-purple-500" : ""
              } w-8 rounded-md`}
              style={{
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 text-gray-400 text-sm h-full flex flex-col justify-between">
          <span>90k</span>
          <span>60k</span>
          <span>30k</span>
          <span>0k</span>
        </div>
      </div>

      {/* Performance Details */}
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-white">45%</span>
        <p className="text-sm text-gray-300">
          Your sales performance is <span className="font-bold">45% better</span>{" "}
          compared to last month <span role="img" aria-label="emoji">😎</span>
        </p>
      </div>

      {/* Details Button */}
      <div className="mt-4">
        <button className="w-full px-4 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600">
          DETAILS
        </button>
      </div>
    </div>
  );
};

export default WeeklyOverview;