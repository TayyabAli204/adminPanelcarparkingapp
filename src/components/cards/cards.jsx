import React, { useEffect, useState } from "react";
import './cards.css'
import axios from "axios";
const cards = () => {

  const [totalUser,setTotalUser]= useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://long-jade-wasp-robe.cyclic.app/auth/getTotalUser");
        setTotalUser(data);
      } catch (error) {
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <section className="  gap-[31px] mb-6 parent  w-full ">
        <div className="border-2  border-[#ECEEF7]    rounded-md  customWidth pl-[33px]  pt-[25px]  pb-[25px]  flex items-center  justify-center lg:px-0 px-6 bg-white  md:mt-4">
          <div className="">
            <div className="flex items-center  pb-[13px] justify-between gap-[13px]">
        
                <div className="font-bold ">Total Users</div>
              <div className="  text-green-500 flex items-center justify-center space-x-1 px-1 bg-[#23C10A] bg-opacity-20 rounded-full">
                  <ion-icon name="trending-up-outline"></ion-icon>

                <div className="text-sm">2.5% </div>
              </div>
            </div>
            <div className="text-[28px] font-bold pb-[9px] ">{totalUser.totalUser}</div>
          </div>
        </div>
        <div className="border-[#ECEEF7] border-2 rounded-md   customWidth pl-[33px]  pt-[25px]  pb-[25px]  flex items-center  justify-center lg:px-0 px-6 bg-white  md:mt-4">
          <div className="">
            <div className="flex items-center  pb-[13px] justify-between gap-[13px]">
        
                <div className="font-bold ">Total Parking </div>
              <div className="  text-green-500 flex items-center justify-center space-x-1 px-1 bg-[#23C10A] bg-opacity-20 rounded-full">
                  <ion-icon name="trending-up-outline"></ion-icon>

                <div className="text-sm">2.5% </div>
              </div>
            </div>
            <div className="text-[28px] font-bold pb-[9px] ">{totalUser.totalArea}</div>
          </div>
        </div>
        
        <div className="border-[#ECEEF7] border-2 rounded-md  customWidth pl-[33px]  pt-[25px]  pb-[25px]  flex items-center  justify-center lg:px-0 px-6 bg-white  md:mt-4">
          <div className="">
            <div className="flex items-center  pb-[13px] justify-between gap-[13px]">
        
                <div className="font-bold ">Total Booked</div>
              <div className="  text-green-500 flex items-center justify-center space-x-1 px-1 bg-[#23C10A] bg-opacity-20 rounded-full">
                  <ion-icon name="trending-up-outline"></ion-icon>

                <div className="text-sm">2.5% </div>
              </div>
            </div>
            <div className="text-[28px] font-bold pb-[9px] ">{totalUser.totalBooked}</div>
          </div>
        </div>
       
        
     
        
      </section>
    </>
  );
};

export default cards;
