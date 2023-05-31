import React from "react";

function FrameComponent() {
  return (

    <div className="rounded-xl w-[250px] h-[30px] flex flex-row items-start justify-start gap-[8px]">
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="w-[212px] h-[30px] flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 relative rounded-31xl bg-beige border-[1.5px] border-solid border-black-100" />
          <div className="relative leading-[21px] hidden">Search</div>
        </div>
      </div>
    </div>
  );
}

export default FrameComponent;
