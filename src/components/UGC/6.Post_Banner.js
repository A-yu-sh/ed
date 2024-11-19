import React from "react";

const PostBanner = () => {
  return (
    <div className="flex justify-center mt-20 bg-gray-200 mx-4 md:mx-44 py-10 rounded-md">
      <div className="max-w-4xl">
        <div>
          <h1 className="text-black text-2xl font-bold text-center">
            We guarantee your PhD admission for 2024.
          </h1>
        </div>
        <div className="text-center mt-10 leading-7 px-4 sm:px-0">
          <p>
            Pursuing a PhD (Doctor of Philosophy) demands significant commitment
            and dedication throughout the entire journey. PhD candidates are
            expected to give various presentations based on their research,
            submit progress reports, and defend their thesis in an open
            viva-voce. With Aimlay's support, you will receive guidance and
            training at every stage of the PhD process, ensuring your journey is
            both comfortable and fulfilling. Aimlay partners with over 9
            universities, and if you choose to pursue your PhD through one of
            our associated institutions, we provide comprehensive assistance
            from admission to the completion of your degree. This includes
            campus visits, managing technical work, and handling all necessary
            documentation to ensure a smooth PhD journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
