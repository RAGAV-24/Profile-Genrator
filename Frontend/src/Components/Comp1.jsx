import React from 'react'
import logo from "../assets/img1.png"
import { FaArrowRightToBracket } from "react-icons/fa6";
const Comp1 = () => {
  return (
    <div className="p-4 rounded">
      <div className="bg-black text-white hover:bg-gray-400 hover:text-black h-100 p-2 rounded-3xl">
        <div className="p-3 flex items-center justify-between">
          <div><p className="font-bold text-3xl w-150 p-6  pl-20">
            Creating your own Github Readme file with The power of Ai .
          </p>
          <div className="pl-25">
          <div className=" flex w-40 text-center  h-10  rounded-3xl bg-gray-200  text-gray-500  hover:text-black text-xl">
          <button className="pl-4.5" > Start Now</button>
          <div className="p-1.5">
          <FaArrowRightToBracket size={30}/>
          </div>

          </div>
          </div>
          </div>
          <div className="rounded-2xl">
            <img src={logo} className="w-200 h-90 rounded-3xl"></img>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Comp1