import React from 'react'
import logo from "../assets/img1.png"
const Comp1 = () => {
  return (
    <div className="p-4 rounded">
    <div className="bg-gray-500 h-100 p-2 rounded-3xl">
      <div className="p-3 flex items-center justify-between">
        <p className="font-bold text-3xl w-150 p-6  pl-20">
          Creating your own Github Readme file with The power of Ai .
        </p>
        <div className="rounded-2xl">
        <img src={logo} className="w-200 h-90"></img>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Comp1