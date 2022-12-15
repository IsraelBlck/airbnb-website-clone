import React from 'react'

function Hero() {
  return (
    <section className="hero flex flex-col p-20 ">
        <img
          src="../images/bnbHero.png"
          alt="Hero photo grid airbnb"
          className="self-center max-w-md mx-auto"
        />
        <h1 className="hero--header mb-16px text-4xl font-bold">
          Online Experiences
        </h1>
        <p className="hero--text mt-0">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
    </section>
  );
}

export default Hero