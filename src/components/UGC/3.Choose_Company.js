import React from "react";
import data from "./advertising";

const Choose_Company = () => {
  return (
    <div>
      <div className="mt-20 flex justify-center">
        <h1 className="text-black text-3xl font-semibold">
          Why to choose Aimlay for your PhD Admission 2024?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 mt-20">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className=" border-2 border-black p-3 md:p-5 w-full md:w-auto flex flex-col items-center">
              <div className="text-center">
                <div className="flex justify-center">
                  <img src={item.image} className="w-24 md:w-32" />
                </div>

                <div className="text-black text-xl md:text-2xl font-medium max-w-[25ch] md:max-w-[30ch] mt-4 md:mt-6">
                  {item.title}
                </div>
                <div className="text-black text-base md:text-lg max-w-[35ch] md:max-w-[40ch] mt-4 md:mt-6">
                  {item.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Choose_Company;
