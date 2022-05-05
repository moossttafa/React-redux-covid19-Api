import React, { Fragment } from 'react'
import Imge2 from "../Img/coronavirus.png";
import Imge5 from "../Img/coronavirus (2).png";
import Imge6 from "../Img/virus.png"
import "./style.css"

const WorldState = () => {
  return (
    <Fragment>
      <div className="countries">
        <div className="title text-center">
          <span className="alert">احصائيات العالم </span>
          <h2> كل دول العالم  </h2>
        </div>
        <div className='countery'>
          <div className="row">
            <div className="col">
              <div className="item">
                <img src={Imge2} alt="pic" />
                <h2> 342424 </h2>
                <p>  الحالات المؤكده  </p>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <img src={Imge5} alt="pic" />
                <h2> 242458 </h2>
                <p>  الحالات المؤكده  </p>
              </div>
            </div>
            <div className="col ">
              <div className="item">
               <img className="margin" src={Imge6} alt="pic" />
               <h2> 24993226 </h2>
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