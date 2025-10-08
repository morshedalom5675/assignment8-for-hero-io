import React from "react";

const TrustedBage = () => {
  return (
    <div className="py-20 bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
      <div className=" container mx-auto text-white text-center justify-center items-center">
        <h1 className="text-5xl font-bold text-center justify-center">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex justify-around gap-6 mt-14">
          <div>
            <p className="text-sm text-gray-300">Total Download</p>
            <h1 className="text-5xl font-bold py-4">29.9M</h1>
            <p className="text-sm text-gray-300">21% more than last month</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Total Reviews</p>
            <h1 className="text-5xl font-bold py-4">906K</h1>
            <p className="text-sm text-gray-300">46% more than last month</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Active Apps</p>
            <h1 className="text-5xl font-bold py-4">132+</h1>
            <p className="text-sm text-gray-300">231 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBage;
