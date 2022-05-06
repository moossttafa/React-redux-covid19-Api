import React, { Fragment, useEffect } from 'react'
import Imge2 from "../Img/coronavirus.png";
import Imge5 from "../Img/coronavirus (2).png";
import Imge6 from "../Img/virus.png"
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovid } from '../../Redux/Actions/CovidActions';

const WorldState = () => {

  const covid = useSelector((state) => state.allCovide.covide);
  const dispatch = useDispatch();  
 const {cases,deaths,recovered} = covid;
  useEffect(() => { 
    dispatch(fetchCovid());
  }, [dispatch])

  return (
    <Fragment>
      <div className="countries" id='worldState'>
        <div className="title text-center">
          <span className="alert">احصائيات العالم </span>
          <h2> كل دول العالم  </h2>
        </div>
        <div className='countery'>
          <div className="row">
            <div className="col">
              <div className="item">
                <img src={Imge2} alt="pic" />
                <h2> {cases} </h2>
                <p>  الحالات المؤكده  </p>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <img src={Imge5} alt="pic" />
                <h2> {recovered} </h2>
                <p>  الحالات المؤكده  </p>
              </div>
            </div>
            <div className="col ">
              <div className="item">
               <img className="margin" src={Imge6} alt="pic" />
               <h2> {deaths} </h2>
               <p>  الحالات المؤكده  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default WorldState