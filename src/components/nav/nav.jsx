import React from "react";
import svg1 from "../../assets/navbar/1.svg";
import svg2 from "../../assets/navbar/splashlogo.svg";
import svg3 from "../../assets/navbar/Vector.svg";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebseConfig";
import { toast } from "react-toastify";
export default ({ children }) => {
  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast.success("Log out Successfully");
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };
  return (
    <>
      <nav className="fixed flex justify-evenly md:justify-between py-[34px] z-10 bg-[#FFFFFF] w-full border-b-[1px] border-[#E8E8E8] lg:gap-[30%] xl:gap-[30%]   items-center">
        <div className="flex gap-5 sm:gap-10 md:gap-[140px] justify-around items-center ">
          {children}
          <Link to="/">
            <img
              src={svg2}
              className="cursor-pointer w-[163px] h-[50px] md:pl-[51px] "
              alt=""
            />
          </Link>
          <div className="hidden md:flex justify-center items-center gap-3">
            <img src={svg3} alt="" className="mb-[2px]" />
            <input
              type="text"
              className=" focus:outline-none placeholder:text-[20px]"
              placeholder="Search..."
            />
          </div>
        </div>
        <div>

          <button
            onClick={signOutUser}
            className="text-white bg-[#5932EA] hover:bg-gray-700 rounded-lg py-2 px-4 ml-4 mr-10"
          >
            Sign Out{" "}
          </button>
        </div>
      </nav>
      <div className="h-[102px]"></div>
    </>
  );
};
