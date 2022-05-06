import React from 'react';
import Img1 from "../Img/doctor-giving-treatment-to-corona-positive-woman.png"
import Img2 from "../Img/coronavirus (2).png"
import "./style.css";
import WorldState from '../worldStats/WorldState';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <div className="main_title  text-center">
          <span> عن الفيروس  </span>
          <h2 className="text-center p-3"> فيروس كورنا (COVID-19) </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="cont_img">
                <img src={Img1} alt="pic" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info">
                <h2 className="ques">  ما هو فيروس كورونا المستجد؟  </h2>
                <p className="lead"> مرض فيروس المستجد (COVID-19) هو مرض معد يسببه فيروس جديد. يتسبب المرض في أمراض الجهاز التنفسي (مثل الأنفلونزا) مع أعراض مثل السعال والحمى ، وفي الحالات الأكثر صعوبة ، صعوبة في التنفس. </p>
                <p className="lead"> يمكن أن تحمي نفسك عن طريق غسل يديك بشكل متكرر ، وتجنب لمس وجهك ، وتجنب الاتصال الوثيق (1 متر أو 3 أقدام) المسافات مع المرضى. </p>
                <a href="https://en.wikipedia.org/wiki/Coronavirus">المذيد</a>
                <div className="lav_img">
                  <img src={Img2} alt="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WorldState />
      </div>
    </div>
  )
}

export default About