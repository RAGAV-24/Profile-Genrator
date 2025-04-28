import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Upload from "./Components/Upload"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upload" element={<Upload />}></Route>

        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App