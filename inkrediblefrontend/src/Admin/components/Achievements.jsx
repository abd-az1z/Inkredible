import React from "react";
import trophyImg from "../../assets/images/trophy.png";

const Achievements = () => {
  return (
    <div className="relative p-6 shadow bg-gradient-to-l from-gray-800 to-blue-600 text-white border rounded-lg">
      {/* Title */}
      <h3 className="text-lg font-semibold">Shop With A A</h3>
      <p className="text-sm text-gray-200 mt-1">Congratulations 🎉</p>

      {/* Stats */}
      <p className="text-3xl font-bold my-2 text-blue-400">420.8k</p>

      {/* Button */}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600">
        View Sales
      </button>

      {/* Trophy Image */}
      <img
        src={trophyImg}
        alt="Trophy"
        className="absolute bottom-6 right-2 w-24 h-24"
      />
    </div>
  );
};

export default Achievements;