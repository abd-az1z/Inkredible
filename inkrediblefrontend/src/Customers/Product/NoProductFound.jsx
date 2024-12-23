import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRedo } from "react-icons/fa";
import noproductfound from "../../assets/noproductfound.png";

const NoProductFound = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const handleRefresh = () => {
    navigate(0); // Refresh the page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      // Handle the feedback submission logic here
      console.log("Feedback submitted:", feedback);
      setFeedback("");
      alert("Thank you for your feedback!");
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  return (
    <div className="w-full h-full p-10">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-6xl font-serif text-[#583B1F]">No Products Found</p>
        <p className="text-[#583B1F] text-3xl font-light mt-16">
          Help us to Improve
        </p>

        {/* Feedback Form */}
        <form
          onSubmit={handleSubmit}
          className="w-3/4 max-w-md mt-10"
        >
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please share your feedback..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#583B1F]"
            rows="4"
          ></textarea>
          <div className="mt-4 text-center">
            <button className="mt-10 border-[#C1BFCB] border-2 hover:bg-[#C1BFCB] hover:text-[#E5E0DA] text-[#C1BFCB] uppercase tracking-widest py-3 px-10 rounded-full">
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoProductFound;
