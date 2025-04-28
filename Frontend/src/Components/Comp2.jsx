import React from 'react'
import logo2 from "../assets/img2.webp"
const Comp2 = () => {
  return (
    <div className="p-4 rounded">
      <div className="bg-black text-white hover:bg-gray-400 hover:text-black h-100 p-2 rounded-3xl">
        <div className="p-3 flex items-center justify-between">

          <div className="rounded-4xl">
            <img src={logo2} className="w-2000 h-80 rounded-3xl"></img>
          </div>
          <div className="w-2000 h-100 pt-10 pl-10">
          <h1 className="text-5xl font-bold ">CodeT5 (base-sized model)</h1>
          <p className="h-3/4 pt-10 font-medium ">
  CodeT5 is a pre-trained encoder-decoder Transformer model designed for both code understanding and generation. It introduces identifier-aware pre-training and leverages code comments for better natural and programming language alignment. Experiments show it outperforms prior methods in tasks like defect and clone detection, while capturing deeper code semantics.
</p>
          </div>

          


        </div>

      </div>
      </div>

  )
}

export default Comp2