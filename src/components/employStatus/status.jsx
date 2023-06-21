import React from "react";
import img1 from "../../assets/Employe Status/1.svg";
import img2 from "../../assets/Employe Status/2.svg";
import img3 from "../../assets/Employe Status/3.svg";
import img4 from "../../assets/Employe Status/4.svg";
import img5 from "../../assets/Employe Status/5.svg";
import img6 from "../../assets/Employe Status/6.svg";
export default () => {
  let arr = [
    {
      employees: [
        { name: "Justin Lipshutz", pic: img2 },
        { name: "Marcus Culhane", pic: img3 },
        { name: "Leo Stanton", pic: img4 },
      ],
      departments: ["Marketing", "Finance", "R&D"],
      ages: ["22", "24", "28"],
      status: ["Permanent", "Contract", "Permanent"],
      discipline: ["100%", "95%", "89%"],
    },
  ];
  {
    /*  */
  }

  return (
    <>
      <section
        className=" bg-[#FFFFFF]  border-[#ECEEF7] !h-[342px] rounded-md  p-[15px] sm:p-[27px]  w-[100%] lg:w-[287px] flex-grow   border-[1.81193px]"
      >
        <div className="flex justify-between  w-full pb-[24px]   ">
          <p className=" whitespace-nowrap sm:text-[20px] font-bold ">
            Employee Status
          </p>
          <div className="text-[#1A2B88]  text-[12px] w-[131px] flex justify-center items-center rounded-[10px] bg-[#F7F7F7] font-bold gap-[11px]">
            Filter & Short <img src={img5} alt="" />{" "}
          </div>
        </div>
        <div className="    overflow-x-auto ">
          <ul className=" flex   ">
            <ul className="">
              <li className="text-[#949494] text-[14.5px] border-b-[1.81193px] pb-[14px] whitespace-nowrap">
                Employee Name
              </li>
              <ul className="pt-[18px] mr-[72px]">
                {arr[0].employees.map((item) => {
                  return (
                    <li className="flex items-center   sm:gap-3 font-bold   ">
                      <img src={item.pic} className="mt-3" />
                      <li className="w-[101px] whitespace-nowrap">
                        {item.name}
                      </li>
                    </li>
                  );
                })}
              </ul>
            </ul>

            <ul className=" self-start  ">
              <li className="text-[#949494] text-[14.5px] pb-[14px] border-b-[1.81193px] pl-[70px] w-full   ">
                Department
              </li>
              <ul className="font-bold flex flex-col gap-[36px] ml-[72px] pt-[36px] ">
                {arr[0].departments.map((item) => {
                  return <li className="text-left w-[66px]">{item}</li>;
                })}
              </ul>
            </ul>
            <ul className="self-start flex flex-col  ">
              <li className="text-[#949494] text-[14.5px] pb-[14px] border-b-[1.81193px] pl-[70px] w-full ">
                Age
              </li>

              <ul className="font-bold flex flex-col  gap-[36px] ml-[73px] pt-[36px]">
                {arr[0].ages.map((item) => {
                  return <li className="text-left w-[66px]">{item}</li>;
                })}
              </ul>
            </ul>
            <ul className="self-start flex flex-col  ">
              <li className="text-[#949494] text-[14.5px] pb-[14px] border-b-[1.81193px] pl-[62px] w-full ">
                Disipline
              </li>
              <ul className="flex flex-col gap-[36px] font-bold ml-[67px] pt-[36px]">
                {arr[0].ages.map((item) => {
                  return (
                    <li>
                      <span className="text-[#16C098]">+</span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </ul>
            <ul className="self-start flex flex-col ">
              <li className="text-[#949494] text-[14.5px] pb-[14px]  border-b-[1.81193px] pl-[68px] w-full ">
                Status
              </li>
              <ul className="flex flex-col gap-[29px]  font-bold ml-[51px] pt-[36px]">
                {arr[0].status.map((item) => {
                  return (
                    <li>
                      <button
                        className={`rounded-[4px] py-1 text-[14px] w-[87px]  ${
                          item == "Permanent"
                            ? "text-[#16C098] bg-[#16C098] bg-opacity-20"
                            : "bg-opacity-20 text-[#5C5C5C] bg-[#5C5C5C]"
                        }`}
                      >
                        {" "}
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </ul>
          </ul>
        </div>
      </section>
    </>
  );
};
