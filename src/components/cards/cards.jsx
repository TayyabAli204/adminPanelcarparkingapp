import React from "react";
import './cards.css'
const cards = () => {
  return (
    <>
      <section className="  gap-[31px] mb-6 parent  w-full ">
        <div className="border-2  border-[#ECEEF7]    rounded-md  customWidth pl-[33px]  pt-[25px]  pb-[25px]  flex items-center  justify-center lg:px-0 px-6 bg-white  md:mt-4">
          <div className="">
            <div className="flex items-center  pb-[13px] justify-between gap-[13px]">
        
                <div className="font-bold ">Total Employees</div>
              <div className="  text-green-500 flex items-center justify-center space-x-1 px-1 bg-[#23C10A] bg-opacity-20 rounded-full">
                  <ion-icon name="trending-up-outline"></ion-icon>

                <div className="text-sm">2.5% </div>
              </div>
            </div>
            <div className="text-[28px] font-bold pb-[9px] ">1427</div>
            <p className="text-[14px] text-gray-500 x">Employee</p>
          </div>
        </div>
        <div className="border-[#ECEEF7] border-2 rounded-md   customWidth pl-[33px]  pt-[25px]  pb-[25px]  flex items-center  justify-center lg:px-0 px-6 bg-white  md:mt-4">
          <div className="">
            <div className="flex items-center  pb-[13px] justify-between gap-[13px]">
        
                <div className="font-bold ">Job View</div>
              <div className="  text-green-500 flex items-center justify-center space-x-1 px-1 bg-[#23C10A] bg-opacity-20 rounded-full">
                  <ion-icon name="trending-up-outline"></ion-icon>

                <div className="text-sm">2.5% </div>
              </div>
            </div>
            <div className="text-[28px] font-bold pb-[9px] ">1427</div>
            <p className="text-[14px] text-gray-500 x">Employee</p>
          </div>
        </div>
        
        <div className="border-[#ECEEF7] border-2 rounded-md  customWidth pl-[33px]  pt-[25px]  pb-[25px]  flex items-center  justify-center lg:px-0 px-6 bg-white  md:mt-4">
          <div className="">
            <div className="flex items-center  pb-[13px] justify-between gap-[13px]">
        
                <div className="font-bold ">Job Applied</div>
              <div className="  text-green-500 flex items-center justify-center space-x-1 px-1 bg-[#23C10A] bg-opacity-20 rounded-full">
                  <ion-icon name="trending-up-outline"></ion-icon>

                <div className="text-sm">2.5% </div>
              </div>
            </div>
            <div className="text-[28px] font-bold pb-[9px] ">1427</div>
            <p className="text-[14px] text-gray-500 x">Employee</p>
          </div>
        </div>
        <div className="border-[#ECEEF7] border-2 rounded-md  differentCustomWidth pl-[33px] h-[159px]  pt-[25px]  pb-[25px]  flex items-center  justify-center lg:px-0 px-6 bg-white  md:mt-4">
          <div className="">
            <div className="flex items-center  pb-[13px] justify-between gap-[13px]">
        
                <div className="font-bold ">Total Employees</div>
                <div className="  text-red-500 flex items-center justify-center space-x-1 px-1 bg-[#C71026] bg-opacity-20 rounded-full">
                <div className="text-sm pt-1">
                  <ion-icon name="trending-down-outline"></ion-icon>
                </div>
                <div className="text-sm">2.5% </div>
              </div>
            </div>
            <div className="text-[28px] font-bold pb-[9px] ">1427</div>
            <p className="text-[14px] text-gray-500 x">Employee</p>
          </div>
        </div>
        
     
        
      </section>
    </>
  );
};

export default cards;
