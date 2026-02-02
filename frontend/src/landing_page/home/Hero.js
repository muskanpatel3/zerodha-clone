import React from 'react';

function Hero() {
  return (
    <div class='container p-5 mb-5' >
      <div class='row text-center'>
        <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'></img>
        <h1 className='mt-5'>Invest to everythisng</h1>
        <p>Online plateform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: " 20%", margin: "0 auto" }}>Signup Now</button>
      </div>
    </div>
  );
}

export default Hero;