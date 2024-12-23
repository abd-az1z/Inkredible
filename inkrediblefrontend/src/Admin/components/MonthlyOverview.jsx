import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoLogoUsd } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

const stats = [
  {
    stats: "245K",
    title: "Sales",
    icon: <IoMdTrendingUp className="text-blue-500 text-3xl" />,
  },
  {
    stats: "12.5K",
    title: "Customers",
    icon: <AiOutlineUser className="text-green-500 text-3xl" />,
  },
  {
    stats: "1.54K",
    title: "Products",
    icon: (
      <MdOutlineProductionQuantityLimits className="text-yellow-500 text-3xl" />
    ),
  },
  {
    stats: "88K",
    title: "Revenue",
    icon: <IoLogoUsd className="text-purple-500 text-3xl" />,
  },
];

const MonthlyOverview = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-gray-800 rounded-lg border shadow p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Monthly Overview</h2>
          <p className="text-sm  my-2 text-gray-200">
            <span className="font-bold text-white">Total 48.5% growth</span>{" "}
            this month
          </p>
        </div>
        <button className="text-gray-300 hover:text-white">
          <CiMenuKebab />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-2"
          >
            <div className="p-3 bg-slate-100 rounded-lg mr-4">{item.icon}</div>
            <div>
              <p className="text-sm text-white">{item.title}</p>
              <p className="text-lg font-bold text-slate-100">{item.stats}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyOverview;
