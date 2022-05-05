import React from 'react'
import Image1 from '../Img/doctor-checking-woman-with-temperature-and-virus-measuring-machine.png'
import Image2 from '../Img/doctor-checking-woman-with-temperature-and-virus-measuring-machine.png'
import { AiOutlineCheck } from 'react-icons/ai';
import "./style.css"

const Symptoms = () => { 
  const style ={color : "#FFF" , background : "#40cd79"}

  return (
    <div className="symptoms">
      <div className="container">
        <div className="row"> 
          <div className="col-lg-6">
            <div className="info">
              <div className="alert"> Covid-19 أعراض </div>
              <div className="main_title">
                <h2> ما هي الاعراض ؟ </h2>
                <p className="lead"> تتراوح أعراض COVID-19 من خفيفة إلى شديدة. يستغرق الأمر من 2 إلى 14 يومًا بعد التعرض لتطور الأعراض. قد تشمل الأعراض: </p>
              </div>
              <div className="row symptomsRows">
                <div className="col">
                  <ul>
                    <li><AiOutlineCheck style={style}/> السعال الصعب </li> 
                    <li><AiOutlineCheck style={style}/> حمى </li>
                    <li><AiOutlineCheck style={style}/> صداع الراس </li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li><AiOutlineCheck style={style} /> الضائقة التنفسية </li>
                    <li><AiOutlineCheck style={style} /> ضيق في التنفس </li>
                    <li><AiOutlineCheck style={style} /> فشل كلوي </li>
                  </ul>
                </div>
              </div>
              <button className="btn"> تحقق من الأعراض </button>
            </div>
          </div> 
          <div className="col-lg-6">
            <div className="cont_img">
              <img src={Image1} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Symptoms