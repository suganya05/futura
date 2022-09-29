import React from "react";
import CheckCircle from "../../assets/icons/check-circle.svg";
import Play from "../../assets/icons/blue-play.svg";
import "../Hero/Hero.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from "../../assets/images/background-img.png";

const settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dot: true,
  // responsive: [
  //   {
  //     breakpoint: 1240,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 890,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 620,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 440,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="mx">
        <div className="hero">
          <div className="background-img">
            <img src={Background} alt="" />
          </div>

          <div className="video-container">
            <div className="video">
              <img src={Play} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="check-circle">
              <img src={CheckCircle} alt="" />
              <h1>ZERO</h1>
              <p>fee education</p>
            </div>
            <div className="check-circle-two">
              <img src={CheckCircle} alt="" />
              <h1>1</h1>
              <p>on</p>
              <h1>1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
