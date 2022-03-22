import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../styled/Button";
import styled from "styled-components";

const Wrapper = styled.header`
  padding: 5%;
  height:100vh;
  @media(min-width:768px){
      height:660px;
      
  }
  @media(min-width:1200px){
      height:100vh;

  }
  img {
    width: 150px;
    transition:all 0.7s ease;
    animation:animateImage 0.7s ease;
  }
  .left {
    display: flex;
    width: 100%;
    position:relative;
    z-index:9;
    justify-content: space-between;
    @media(min-width:768px){
        width:max-content;
    }
    .hamburger {
      padding: 20px 46px 20px 6px;
      position: relative;
      span {
        width: 40px;
        height: 3px;
        border-radius: 10px;
        background: ${(props) => props.theme.color.red};
        position: absolute;
        transition: all 0.7s ease;
        &:before {
          height: 100%;
          width: 100%;
          border-radius: 10px;
          background: ${(props) => props.theme.color.red};
          position: absolute;
          top: -7px;
          content: "";
          transition: all 0.7s ease;
        }
        &:after {
          height: 100%;
          width: 100%;
          border-radius: 10px;
          background: ${(props) => props.theme.color.red};
          position: absolute;
          top: 7px;
          content: "";
          transition: all 0.7s ease;
        }
      }
    }
    .open {
      span {
        background: transparent;
        &:before {
          top: 0;
          transform: rotate(495deg);
          background: #ffffff;
        }
        &:after {
          top: 0;
          transform: rotate(-495deg);
          background: #ffffff;
        }
      }
    }
  }
  .right {
    display: none;
  }
  .menu {
    background: ${(props) => props.theme.color.dimred};
    position:absolute;
    top:0;
    left:0;
    width:100%;
    padding-top:15vh;
    max-width:0;
    height:100vh;
    overflow:0;
    transition:all 0.7s ease;
    @media(min-width:768px){
        height:unset;
        padding-bottom:30px;
    }
    @media(min-width:1200px){
        height:100vh;
    }
    ul{
        background:url('./images/ulimage.png');
        background-position:center center;
        background-size:cover;
        margin:0 5%;
        height:95%;
        padding:5%;
        border-radius:10px;
        li{
            a{
                display:block;
                font-size:20px;
                color:#ffffff;
                padding:20px 0 3px;
                margin-bottom:20px;
                font-family:${props => props.theme.fam.semibold};
                position:relative;
                width:max-content;
                @media(min-width:768px){
                    margin-bottom:10px;
                    font-size:35px;
                }
                &:before{
                    width:100%;
                    height:2px;
                    background:#ffffff;
                    position:absolute;
                    bottom:0;
                    left:0;
                    content:"";
                    max-width:0;
                    animation:animateBefore 0.7s ease;
                    overflow:hidden;
                    transition:max-width 0.7 ease;
                }
            }
            .active{
                &:before{
                    max-width:100%;

                }
            }
        }
    }
  }
  .change{
      max-width:100%;
  }
  .menu-bg{
      display:none;
  }
  @keyframes animateBefore{
      0%{
          width:0;
          max-width:0;
          opacity:0;
      }
      100%{
          width:100%;
          opacity:1;
          max-width:100%;
      }
  }
  @keyframes animateImage{
      0%{
          
          opacity:0;
      }
      100%{
          opacity:1;
      }
  }
`;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <div className="left">
        <div
          className={open ? "hamburger open" : "hamburger"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </div>
        <Link to="/"> <img
          src={open ? "./images/logoOpen.png" : "./images/logo.png"}
          alt="DIPLOMAT BUSINESS NETWORKING CLUB"
        /></Link>
       
      </div>
      <div className="right">
        <Button>Join Us</Button>
        <Button>Contact Us</Button>
      </div>
      <div className={open ? "menu change" : "menu"}>
          <img src="./images/bg.png" className="menu-bg" alt="" />
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active">Events</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">Blog Posts</NavLink>
          </li>
          <li>
            <NavLink to="/club" activeClassName="active">Club Charter</NavLink>
          </li>
          <li>
            <NavLink to="/partner" activeClassName="active">Partner With Us</NavLink>
          </li>
          <li>
            <NavLink to="/photo" activeClassName="active">Photo Gallery</NavLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;
