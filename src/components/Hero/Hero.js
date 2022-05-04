import React, { useEffect } from 'react';
import Imge from "../Img/police-asking-to-stay-home-to-avoid-coronavirus.png";
import Imge2 from "../Img/coronavirus.png";
import Imge3 from "../Img/corona-virus.png";
import Imge4 from "../Img/coronavirus (2).png";
import Imge5 from "../Img/coronavirus (1).png";
import Imge6 from "../Img/virus.png"
// import Imge4 from "../Img/police-asking-to-stay-home-to-avoid-coronavirus.png"
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovid } from '../../Redux/Actions/CovidActions';

const Hero = () => {
  const covid = useSelector((state) => state.allCovide.covide);
  const dispatch = useDispatch(); 
  // const cases = covid.cases
  // const  deaths  = covid.deaths
  // const recovered = covid.recovered
  // console.log("covid",covid);
 const {cases,deaths,recovered} = covid;
  useEffect(() => { 
    dispatch(fetchCovid());
  }, [dispatch])
  

  return (
    <div className='hero'>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-6">
            <div className='details'>
            <div className="info">
              <h1>Save yourself save the world</h1>
            </div>
            <div className="title">
              <div className="data"> Aug 29, 2020 </div>
              <div className="poster"> Today's new stats </div>
              <p>the whole world</p>
            </div>
            <div className="row"> 
            <div className="col">
            <div className="item">
            <img src={Imge2} alt="pic"/> 
                    <h2> {cases} </h2> 
                    <p>new cases</p>
                </div>
              </div>
              <div className="col">
                <div className="item">
                  <img src={Imge5} alt="pic"/>
                    <h2> {recovered} </h2>
                    <p> recover</p>
                </div>
              </div>
              <div className="col">
              <div className="item">
              <img src={Imge6} alt="pic"/>
              <h2> {deaths} </h2>
              <p> fatalities </p>
               </div>
              </div> 
            </div> 
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cont_img">
              <img src={Imge} alt="pic"/>
              <div className="small_img">
                <img src={Imge4} alt="small corona"/>
              </div>
              <div className="big_img big_one">
                <img src={Imge3} alt="big_img"/>
              </div>
            </div> 
          </div> 
        </div>
      </div> 
    </div>
  )
}

export default Hero