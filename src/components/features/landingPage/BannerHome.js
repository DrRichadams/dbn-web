import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { CgChevronRightO, CgChevronLeftO } from "react-icons/cg";
import Button from "../../../styled/Button";

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
  border-radius: 10px;
  background: linear-gradient(to bottom, #a32c3099, #a32c3099),
    url("./images/home.png");
  background-size: cover;
  background-position: center center;

  @media (min-width: 768px) {
    height: 660px;
  }
  @media (min-width: 992px) {
    background: transparent;
  }
  @media (min-width: 1200px) {
    height:90vh;
  }

  img {
    width: 100px;
  }

  .left {
    padding: 5%;
    margin: auto;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
    @media (min-width: 992px) {
      background: ${(props) => props.theme.color.dimred};
      width: 50%;
      padding:10% 5%;
    }
    @media (min-width: 1200px) {
      background: ${(props) => props.theme.color.dimred};
      width: 65%;
      
    }
    h1 {
      font-family: ${(props) => props.theme.semibold};
      line-height: 1.3;
      margin-bottom: 30px;
      font-size: 25px;
      color: #ffffff;
      text-align:left;
      @media (min-width: 768px) {
        font-size: 45px;
      }
      @media (min-width: 992px) {
        font-size: 35px;
        padding-right:10%;
      }
    }
    button {
      font-size: 20px;
      height:40px;
      font-family: ${(props) => props.theme.fam.semibold};
      color: ${(props) => props.theme.color.dimred};
      @media(min-width:768px){
        height:50px;
      }
    }
  }
 
  .right {
    @media (min-width: 992px) {
      position: relative;
      width: 50%;
      height: 100%;
      background: url("./images/home.png");
      background-size: cover;
      background-position: center top;
    }
  }
  .right-img {
    display: none;
    @media (min-width: 1200px) {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .left-img {
    display: none;
    @media (min-width: 1200px) {
      display: block;
      position: absolute;
      right: 0%;
      width: auto;
      height:85%;
      bottom: 0;
    }
  }
  .inner{
    @media(min-width:992px){
      display:flex;
      height:660px;
      border-radius:10px;
      overflow:hidden;
    }
  }
 .swiper-pagination-bullets, .swiper-pagination-bullets{
    top:50%;
    transform:translateY(-50%);
    left:unset;
    height:max-content;
    right:4%;
    position:absolute;
    width:max-content;
    display:flex;
    flex-direction:column;
    
    span{
      height:20px;
      width:20px;
      margin-bottom:20px !important;
    }
  }
  .swiper-pagination-bullet{
    background:#ffffff;
    opacity:0.5;
  }
  .swiper-pagination-bullet-active{
    opacity:1;

  }
`;

function Banner() {
  return (
    <Wrapper>
      <Swiper
        // direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="inner">
            <div className="left">
              <img src="./images/bg (3).png" className="left-img" alt="" />
              <h1>
                The Club is a unique platform for decision makers and
                influential members of the society to share knowledge and
                experiences, discover opportunities and cement collaborations.
              </h1>
              <Button>Read More</Button>
            </div>
            <div className="right">
              <img src="./images/bg (2).png" className="right-img" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <div className="left">
              <img src="./images/bg (3).png" className="left-img" alt="" />
              <h1>
                The Club is a unique platform for decision makers and
                influential members of the society to share knowledge and
                experiences, discover opportunities and cement collaborations.
              </h1>
              <Button>Read More</Button>
            </div>
            <div className="right">
              <img src="./images/bg (2).png" className="right-img" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <div className="left">
              <img src="./images/bg (3).png" className="left-img" alt="" />
              <h1>
                The Club is a unique platform for decision makers and
                influential members of the society to share knowledge and
                experiences, discover opportunities and cement collaborations.
              </h1>
              <Button>Read More</Button>
            </div>
            <div className="right">
              <img src="./images/bg (2).png" className="right-img" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <div className="left">
              <img src="./images/bg (3).png" className="left-img" alt="" />
              <h1>
                The Club is a unique platform for decision makers and
                influential members of the society to share knowledge and
                experiences, discover opportunities and cement collaborations.
              </h1>
              <Button>Read More</Button>
            </div>
            <div className="right">
              <img src="./images/bg (2).png" className="right-img" alt="" />
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </Wrapper>
  );
}

export default Banner;
