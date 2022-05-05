import React from 'react'
import Img1 from "../Img/24323.jpg"
import "./style.css"

const Dieds = () => {
  return (
    <div className="dieds">
      <div className="container">
        <div className="main_title text-center">
          <div className="alert"> توفي من كوفيد 19 </div>
          <h2> توفي أكثر من 700 ألف شخص </h2>
          <h2>  في العالم  </h2>
        </div>
        <div className="cont_img">
          <img src={Img1} alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Dieds