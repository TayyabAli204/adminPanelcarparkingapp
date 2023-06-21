import React from "react";
import svg1 from "../../assets/navbar/1.svg";
import svg2 from "../../assets/navbar/2.svg";
import svg3 from "../../assets/navbar/Vector.svg";
export default ({ children }) => {
  return (
    <>
    <nav className="fixed flex justify-evenly md:justify-between py-[34px] z-10 bg-[#FFFFFF] w-full border-b-[1px] border-[#E8E8E8] lg:gap-[30%] xl:gap-[30%]   items-center">
      <div className="flex gap-5 sm:gap-10 md:gap-[140px] justify-around items-center ">
        {children}
        <img src={svg2} className="   md:pl-[51px] " alt="" />
        <div className="hidden md:flex justify-center items-center gap-3">
          <img src={svg3} alt="" className="mb-[2px]" />
          <input
            type="text"
            className=" focus:outline-none placeholder:text-[20px]"
            placeholder="Search..."
          />
        </div>
      </div>
      <img src={svg1} className='md:pr-[69px]' alt="" />
    </nav>
    <div className="h-[102px]"></div>
    </>
  );
};
