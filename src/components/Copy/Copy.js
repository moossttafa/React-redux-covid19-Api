import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Copy = () => {
  return (
    <div className="copy">
      <div className="container">
        <h4 className="text-center">
          جميع الحقوق محفوظة
          <Link to="/">Mostafa Hamed</Link>
          © 2020
        </h4>
      </div>
    </div>
  )
}

export default Copy