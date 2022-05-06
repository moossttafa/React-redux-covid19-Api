import React from 'react'
import { Link } from 'react-router-dom'
import Img from "../Img/coronavirus (2).png"
import Img1 from "../Img/coronavirus (3).png"
import { FiFacebook } from 'react-icons/fi';
import "./style.css"

const Footer = () => {

  const style ={color : "#e8505b",
    background : "#f1e3df",
    fontSize: "20px",
    borderRadius: "50%",
    width: "42px",
    height: "42px",
    padding: "10px",
  }

  return (
    <footer>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="item-one">
              <h2>
                <img src={Img} alt="pic" />
                كوفيد 19
              </h2>
              <p className="lead">إن أفضل طريقة لمنع انتقال المرض وإبطائه هي أن تكون على علم جيدًا بفيروس COVID-19. احمِ نفسك والآخرين من العدوى عن طريق غسل يديك.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 d-none d-md-block">
            <div className="item-two">
              <h4> معلومات عنا   </h4>
              <ul className="list-unstyled">
                <li> معلومات عنا </li>
                <li>  فريقنا  </li>
                <li> الوقاية </li>
                <li> التعليمات </li>
                <li> اتصل </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 d-none d-md-block">
            <div className="item-three">
              <h4> روابط مفيدة </h4>
              <ul className="list-unstyled">
                <li>  تقارير الحالة  </li>
                <li>   نصيحة للجمهور   </li>
                <li>  أعراض الفيروس  </li>
                <li>   الشركاء  </li>
                <li>  انتشار الفيروس  </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 d-none d-md-block">
            <div className="item-four">
              <h4> اتصل بنا  </h4>
              <p> وزاره الصحة مصر  </p>
              <p> تليفون  <Link to="/">01550281922 </Link></p>
              <p> ايميل  <Link to="/">mostafaahaamed8@gmail.com </Link></p>
              <div className="social">
                <Link to="/"><FiFacebook style={style} /></Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay row">
        <div className="col">
          <div className="item one">
            <img src={Img1} alt="pic" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer