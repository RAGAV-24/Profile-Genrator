import React from 'react'

const NavBar = () => {
  return (
    <div className="">
    <div className="pl-4 pt-4 pr-4">
      <div className="w-4/4 h-15 bg-black rounded-3xl">
      <div className="p-3 flex items-center justify-between">
        <p className="w-55 p-1 h-10 rounded-xl text-white font-bold hover:text-black  hover:bg-gray-300 text-center"> GitHub Readme Generator</p>

        <div className="w-18 h-10 rounded-xl text-white hover:bg-gray-300 hover:text-black text-center p-2 font-bold">
        <button  >
          Login
        </button>
        </div>

      </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar