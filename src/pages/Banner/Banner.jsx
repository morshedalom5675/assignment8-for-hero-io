import React from "react";
import { NavLink } from "react-router";
import heroImg from "../../assets/hero.png"

const Banner = () => {
  return (
    <div className="text-center justify-center mt-20 max-w-10/12 mx-auto">
      <h1 className="text-6xl font-bold">We Build <br /> <span className="text-[#9F62F2]">Productive</span> Apps</h1>
      <p className="py-4 text-gray-500">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div>
        <NavLink to="https://play.google.com/store/games?hl=en" className="btn m-2"><img className="h-6 w-6" src="https://i.ibb.co.com/1YPRmqQ9/google-play.png" alt="" />Google Play</NavLink>
        <NavLink to="https://www.apple.com/app-store/" className="btn m-2"> <img className="h-6 w-6" src="https://i.ibb.co.com/93c00Gzw/app-store.png" alt="" />App Store</NavLink>
      </div>
      <img className="mx-auto mt-10" src={heroImg} alt="hero Image" />
    </div>
  );
};

export default Banner;
