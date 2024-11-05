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
      <div className="flex justify-center  ">
        <div className="grid grid-cols-5 mx-2">
          {features.map((item) => {
            return (
              <div key={item.id} className="border-2 border-gray-200 mx-2 my-2">
                <div className="">
                  <img src={item.image} className="m-2  " />
                  <div className="text-black text-xl ">
                    <h1 className="flex justify-center ">{item.title}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features_and_Services;
