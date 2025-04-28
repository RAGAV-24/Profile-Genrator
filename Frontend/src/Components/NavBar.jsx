import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className="w-4/4 h-15 bg-black">
      <div className="p-3 flex items-center justify-between">
        <p className="w-55 p-1 h-10 rounded-xl text-white font-bold hover:text-green-500  hover:bg-white text-center"> GitHub Readme Generator</p>

        <div className="w-18 h-10 rounded-xl text-white hover:bg-white hover:text-black text-center p-2 font-bold">
        <button  >
          Login
        </button>
        </div>

      </div>
      </div>
    </div>
  )
}

export default NavBar