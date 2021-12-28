import React from 'react';
import SzatmarSlide from '../components/SzatmarSlide'
import BankSlide from '../components/BankSlide'
import RetkozSlide from '../components/RetkozSlide'

const References = () => {
  return (
    <div id="slider" className="st-slider">
      <div className="sliderWrapper">
          <SzatmarSlide />
          <BankSlide />
          <RetkozSlide />
          <BankSlide />
      </div>
    </div>
  )
}

export default References;
