import React from "react";
import Shortner from "./Shortner";

const Main = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="py-20 bg-gray-900 mobile-nav">
        <div className="lg:grid lg:grid-cols-2 mx-auto max-w-5xl lg:px-8 lg:gap-8">
          <div className="lg:py-5 lg:mt-1.5 mx-auto max-w-med px-4 sm:max-w-2xl sm:px-6 lg:px-0">
            <h1 className="text-white text-4xl mt-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight">
              <span className="block">Fast & Secure</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400">
                Your new URL Shortner
              </span>
            </h1>
            <p className="text-base text-gray-300 sm:mt-5 sm:text-xl">
              The fastest and most secure URL Shortener on the web.
            </p>
            <Shortner />
          </div>
          <div className="mt-12 lg:mt-2 lg:relative">
            <div className="mx-auto max-w-med px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img src="/heroImage.svg" alt="Man standing by the link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
