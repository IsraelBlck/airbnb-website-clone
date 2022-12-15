import React from 'react'

function Hero() {
  return (
    <section className="hero flex flex-col p-20 ">
        <img
          src="../images/bnbHero.png"
          alt="Hero photo grid airbnb"
          className="item-center mx-auto"
        />
        <h1 className="hero--header mb-16px text-7xl font-bold py-4 ">
          Online Experiences
        </h1>
        <p className="hero--text mt-0 text-3xl sm:text-1xl md:text-5xl lg-10xl">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
    </section>
  );
}

export default Hero