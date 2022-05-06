import React from 'react'
import {  data } from './data'
import "./style.css"

const WashHand = () => {
  console.log(data);
  return (
    <div className="wash">
      <div className="container">
        <div className="main_title text-center">
          <span className="alert"> اغسل يديك </span>
          <h2> صابون على اليد</h2>
        </div>
        <div className="row">
        {data && data.map((data ,id) => {
          return(
            <div className=" col-sm-4 col-lg-2" key={id}>
              <div className="item">
                <img src={data.img} alt="pic" />
                <h4> {data.title} </h4>
                <span>{data.id}</span>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default WashHand