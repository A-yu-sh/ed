import React from "react";
import features from "./features";

const Features_and_Services = () => {
  return (
    <div>
      <div className="mt-20 flex justify-center">
        <h1 className="text-black text-3xl font-semibold">
          Features and Services for PhD Admission 2024
        </h1>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-2">
          {features.map((item) => {
            return (
              <div
                key={item.id}
                className="border-2 border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div className="mb-4">
                  <img src={item.image} className="w-20 h-20 object-contain" />
                </div>
                <h1 className="text-black text-xl font-medium text-center">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features_and_Services;
