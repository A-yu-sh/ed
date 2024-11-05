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
      <div className="flex justify-center space-x-3 mt-20 ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block border-2 border-black p-5">
              <div className="text-center ">
                <div className="flex justify-center ">
                  <img src={item.image} className="" />
                </div>

                <div className="text-black text-2xl font-medium max-w-[30ch]">
                  {item.title}
                </div>
                <div className="text-black text-lg justify-start max-w-[40ch] mt-14">
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
// We confirm the validity of your degree by
