import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidEgypt } from '../../Redux/Actions/CovidActions';
import Img1 from "../Img/24323.jpg"
import "./style.css"

const Dieds = () => {
  const covid = useSelector((state) => state.allCovide.covide);
  const dispatch = useDispatch();  
 const {deaths} = covid;
  useEffect(() => { 
    dispatch(fetchCovidEgypt());
  }, [dispatch])
  return (
    <div className="dieds">
      <div className="container">
        <div className="main_title text-center">
          <div className="alert"> توفي من كوفيد 19 </div>
          <h2> توفي أكثر من {deaths} مليون شخص </h2>
          <h2>  حول العالم  </h2>
        </div>
        <div className="cont_img">
          <img src={Img1} alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Dieds