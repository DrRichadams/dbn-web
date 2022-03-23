import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { CgChevronRightO, CgChevronLeftO } from "react-icons/cg";
import Button from "../../../styled/Button";

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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
  @media (min-wdith: 1200px) {
    height: 100vh;
  }

  .sticky {
    position: fixed;
    width: 100%;
    background: ${(props) => props.theme.color.blue};
  }
  /* .hide{
    transform:translateY(-150px);
  } */
  img {
    width: 100px;
  }
  .slick-slider {
    width: 100%;
  }
  .box {
    padding: 5%;
    transition: background-image 500ms ease-in-out;
    transform: scale(1.25, 1.25);
    height: 100vh;
    width: 100%;
    background: transparent;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  .slick-active {
    .box {
      transform: scale(1, 1);
    }
  }


  .inner {
    margin: auto;
    position: absolute;
    top: 30%;
    @media (min-width: 768px) {
      top: 40%;
    }

    a {
      text-decoration: none;
      color: #ffffff;
      position: relative;
      z-index: 1;
      &:before {
        content: "";
        height: 2px;
        width: 100%;
        background: #ffffff;
        bottom: -5px;
        left: 0;
        position: absolute;
      }
    }
  }

  .slick-prev,
  .slick-next {
    font-size: 50px;
    color: #ffffff;
    height: 30px;
    display: none;
    width: 30px;
    @media (min-width: 768px) {
      height: 50px;
      display: block;
      width: 50px;
      top: 90%;
    }
  }
  .slick-arrow {
    display: none !important;
    @media (min-width: 768px) {
      display: block !important;
    }
  }
  .slick-next {
    left: unset;
    right: 0px;
    @media (min-width: 768px) {
      right: 5%;
    }
  }
  .slick-dots {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 70%;
    right: 5%;
    transform: translateY(-50%);
    width: max-content;
    display: none !important;
    height: max-content;
    @media (min-width: 768px) {
      display: flex !important;
    }
    li {
      margin-bottom: 20px;
      button {
        &:before {
          font-size: 60px;
          color: #ffffff83;
          line-height: unset;
          opacity: unset;
          top: 0;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .slick-active {
      button {
        &:before {
          color: #ffffff;
          opacity: 1;
        }
      }
    }
  }
  .left {
    padding: 5%;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 768px) {
      padding-bottom: 150px;
      justify-content: flex-end;
    }
    @media (min-width: 992px) {
      background: ${(props) => props.theme.color.dimred};
      width: 50%;
    }
    h1 {
      font-family: ${(props) => props.theme.semibold};
      line-height: 1.3;
      margin-bottom: 30px;
      font-size: 25px;
      color: #ffffff;
    }
    button {
      font-size: 20px;
      font-family: ${(props) => props.theme.fam.semibold};
      color: ${(props) => props.theme.color.dimred};
    }
  }
  .slick-prev {
    left: unset;

    display: block;
    z-index: 1;
    @media (min-width: 768px) {
      right: 12%;
    }
    @media (min-width: 992px) {
      right: 10%;
    }
  }
  .right {
    @media (min-width: 992px) {
      width: 50%;
      height:100%;
      background: url('./images/home.png');
      background-size:cover;
      background-position:center top;
    }
  }
  .right-img {
    display: none;
  }
  .left-img {
    display: none;
  }
`;

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CgChevronLeftO />,
    nextArrow: <CgChevronRightO />,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div className="box item1">
         
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
        <div className="box item2">
        
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
      </Slider>
    </Wrapper>
  );
}

export default Banner;
