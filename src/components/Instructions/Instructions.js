import React from 'react'
import Img from "../Img/coronavirus (3).png"
import Img1 from "../Img/women-with-surgical-mask.png"
import Img2 from "../Img/wash-hands-frequently.png"
import Img3 from "../Img/bum-shake.png"
import "./style.css"

const Instructions = () => {
  return (
    <div className="protects">
      <div className="container">
        <div className="lavander">
          <img src={Img} alt="pic" />
        </div>
        <div className="main_title text-center">
          <span className="alert"> home.product_yourserf.title.alert </span>
          <h2> اتخذ عدة خطوات  لحماية </h2>
          <h2>نفسك</h2>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg">
            <div className="mycard">
              <div className="cont_img">
                <img src={Img1} alt="pic" />
              </div>
              <h3>  ارتداء قناع الوجه</h3>
              <p className="lead">    يمكننا مساعدة بعضنا البعض  لحماية الآخرين من التعرض إذا كنت مريضاً أو إذا كنت حاملًا للمرض </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg">
            <div className="mycard">
              <div className="cont_img">
                <img src={Img2} alt="pic" />
              </div>
              <h3> غسل اليديدن</h3>
              <p className="lead"> نظِّف يديك عن طريق فركهما بمستحضر يحتوي على الكحول؛ إذ يُعد الكحول الوسيلة المفضلة للتطهير   </p>

            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg">
            <div className="mycard">
              <div className="cont_img">
                <img src={Img3} alt="pic" />
              </div>
              <h3>  التباعد الاجتماعي  </h3>
              <p className="lead"> الحفاظ على مسافة بعيدة على الأقل من الذراع عن الأخرين، وتقليل التجمعات </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions