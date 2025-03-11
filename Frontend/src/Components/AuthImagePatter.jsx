import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gray-800/50 p-12 rounded-lg">
      <div className="max-w-md text-center text-white">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`aspect-square rounded-2xl bg-green-400/20 ${i % 2 === 0 ? "animate-pulse" : ""}`} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
