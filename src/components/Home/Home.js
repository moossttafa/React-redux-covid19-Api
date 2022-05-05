import React, { Fragment } from 'react'
import About from '../About/About'
import Dieds from '../Dieds/Dieds'
import Hero from '../Hero/Hero'
import Instructions from '../Instructions/Instructions'
import Symptoms from '../Symptoms/Symptoms'
import WashHand from '../WashHand/WashHand'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Symptoms />
      <Instructions />
      <Dieds />
      <WashHand />
    </Fragment>
  )
}

export default Home