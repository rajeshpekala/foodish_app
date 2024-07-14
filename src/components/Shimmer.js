import React from "react";

const Shimmer = () => (
  <div className="flex flex-wrap justify-center">
    {Array(18)
      .fill("")
      .map((_, index) => (
        <div
          key={index}
          className="w-64 h-40 bg-gray-300 rounded-lg m-4 shimmer"
        ></div>
      ))}
  </div>
);

export default Shimmer;
