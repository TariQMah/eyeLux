import React from "react";

const Index = () => {
  return (
    <div className=" my- 5 sm:my-10">
      <div className="flex gap-5 justify-center flex-wrap sm:flex-nowrap">
        <div className="border-[#E1E1E1] w-[30%] flex items-center rounded-lg p-3 border">
          <img src="/images/biofinity.png" />
        </div>
        <div className="border-[#E1E1E1] w-[30%]  flex items-center rounded-lg p-3 border">
          <img src="/images/airOptix.png" />
        </div>
        <div className="border-[#E1E1E1] w-[30%]  flex items-center rounded-lg p-3 border">
          <img src="/images/dailies.png" />
        </div>
        <div className="border-[#E1E1E1] w-[30%]  flex items-center rounded-lg p-3 border">
          <img src="/images/acuvue.png" />
        </div>
        <div className="border-[#E1E1E1] w-[30%]  flex items-center rounded-lg p-3 border">
          <img src="/images/biotrue.png" />
        </div>
        <div className="border-[#E1E1E1] w-[30%]  flex items-center rounded-lg p-3 border">
          <img src="/images/precision.png" />
        </div>
      </div>
    </div>
  );
};

export default Index;
