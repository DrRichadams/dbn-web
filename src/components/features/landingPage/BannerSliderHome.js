/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react"
import "../../../stylesFolder/banner_slider_home.css"
import { v4 as uuidv4 } from "uuid"
import banner_img from "../../../Resources/banner_img.png";
import styled from 'styled-components';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/effect-fade";
// import { FreeMode, Navigation, Thumbs } from "swiper";

const Wrapper = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');


 * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	vertical-align: middle;
}

.bdt-timeline-container {
	display: flow-root;
    box-sizing: content-box;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
	overflow: hidden;
	margin-top: 50px;
}

.upk-salf-slider-wrapper {
	display: flex;
	flex-direction: row;
	background: #fff;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
	height: 400px;
	padding: 30px;
	position: relative;

.upk-salf-item {
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	&.swiper-slide-active {
		.upk-salf-content-wrap {
		}
		.upk-salf-title,
		.upk-salf-desc,
		.upk-salf-button   {
			opacity: 1;
		}
	}
	.upk-salf-image-wrap {
		height: 100%;
		width: 100%;
	}
	.upk-xanc-img {
		display: block;
		width: 100%;
		height: 800px;
		object-fit: cover;
	}
	.upk-salf-content-wrap {
		position: absolute;
		left: 0;
		bottom: 0;
		top: unset;
		max-width: 460px;
		overflow: hidden;
		background: #ffffff8a;
		backdrop-filter: blur(15px);
		transition: backdrop-filter 0.9s;
		padding: 20px;
		padding-left: 20px;
	}
	.upk-salf-title {
		font-size: 23px;
		font-weight: 700;
		line-height: 1.2;
		color: #2B2D42;
		text-transform: capitalize;
		margin-bottom: 20px;
		opacity: 0;
	}
	.upk-salf-desc {
		color: #656565;
		font-size: 14px;
		line-height: 1.6;
		text-transform: capitalize;
		margin-bottom: 20px;
		opacity: 0;
	}
	.upk-salf-button {
		opacity: 0;
		.link {
			color: #2b2d42;
			cursor: pointer;
			font-weight: 500;
			text-decoration: none;
			text-transform: capitalize;
			font-size: 14px;
			transition: all .3s ease;
			&:hover {
				color: #ff215a;
			}
		}
		.link--arrowed {
			display: inline-block;
			.arrow-icon {
				position: relative;
				top: 0;
				-webkit-transition: -webkit-transform 0.3s ease;
				transition: -webkit-transform 0.3s ease;
				transition: transform 0.3s ease;
				transition: transform 0.3s ease, -webkit-transform 0.3s ease;
				vertical-align: middle;
			}
			.arrow-icon--circle {
				transition: stroke-dashoffset .3s ease;
				stroke-dasharray: 95;
				stroke-dashoffset: 95;
			}
			g {
				stroke: currentColor;
				color: #2b2d42;
			}
			&:hover {
				.arrow-icon {
					transform: translate3d(5px, 0, 0);
				}
				.arrow-icon--circle {
					stroke-dashoffset: 0;
				}
				g {
					color: #ff215a;
				}
			}
		}
	}
}

// scroll css start
.upk-page-scroll {
	position: absolute;
    bottom: 8%;
    right: 5%;
    transform: rotate(90deg);
    z-index: 1;
	display: none;
	.arrow-up {
		height: 70px;
		width: 70px;
		display: block;
		background: #ffffffc9;
		backdrop-filter: blur(18px);
		position: relative;
		cursor: pointer;
		transition: all .5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
		transform: rotate(-90deg);
		overflow: hidden;
	}
	.arrow-slide {
		left: 0;
		top: -100%;
		width: 100%;
		height: 100%;
		background: #ff215a;
		position: absolute;
		display: block;
		z-index: 0;
	}
	.long-arrow-left{
		display: block;
		margin: 30px auto;
		width: 16px;
		height: 16px;
		border-top: 2px solid #2b2d42;
		border-left: 2px solid #2b2d42;
	}
	.long-arrow-left{
	transform: rotate(-135deg);
	}
	.long-arrow-left::after{
			content: "";
		display: block;
		width: 2px;
		height: 25px;
		background-color: #2b2d42;
		transform: rotate(
	-45deg
	) translate(8px, 3px);
		left: 0;
		top: 0;
	}
	.arrow-up:hover {
		transition: all .1s;
		.left-arm:after {
		transform: rotate(-10deg);
		}
		.right-arm:after {
		transform: rotate(10deg);
		}
		.arrow-slide {
		transition: all .5s ease-in-out;
		transform: translateY(200%);
		}
	}
}
// scroll css end

.upk-salf-nav-pag-wrap {
	position: absolute;
	top: 0;
	height: 100%;
	right: 0;
}
.upk-salf-navigation {
	margin-top: 40px;
	margin-right: 2px;
	.link--arrowed {
		display: inline-block;
		.arrow-icon {
			position: relative;
			top: 0;
			-webkit-transition: -webkit-transform 0.3s ease;
			transition: -webkit-transform 0.3s ease;
			transition: transform 0.3s ease;
			transition: transform 0.3s ease, -webkit-transform 0.3s ease;
			vertical-align: middle;
		}
		.arrow-icon--circle {
			transition: stroke-dashoffset .3s ease;
			stroke-dasharray: 95;
			stroke-dashoffset: 95;
		}
		g {
			stroke: currentColor;
			color: #2b2d42;
		}
		&:hover {
			.arrow-icon {
				transform: translate3d(5px, 0, 0);
			}
			.arrow-icon--circle {
				stroke-dashoffset: 0;
			}
			g {
				color: #ff215a;
			}
		}

	}
	.upk-button-next {
		margin-top: 15px;
		transform: rotate(90deg);
	}
	.upk-button-prev {
		transform: rotate(-90deg);
	}
}
// swiper pagination css start
.upk-salf-pagi-wrap {
	position: absolute;
	top: 43%;
    right: 0;
    margin-right: 22px;
// VARIABLES
// =================================================
$black: #2b2d42;
$white: #fff;
$color-bullets: $black;
// MIXIN - PREFIX
// =================================================
@mixin prefix($property, $value, $prefixes: webkit moz ms o) {
	@each $prefix in $prefixes {
		#{'-' + $prefix + '-' + $property}: $value;
	}
	#{$property}: $value;
}

// MIXIN - ANIMATION AND KEYFRAMES
// =================================================
@mixin keyframes($animationName) {
	@-webkit-keyframes #{$animationName} {
		@content;
	}
	@-moz-keyframes #{$animationName} {
		@content;
	}
	@-o-keyframes #{$animationName} {
		@content;
	}
	@keyframes #{$animationName} {
		@content;
	}
}

@mixin animation($animate...) {
	$max: length($animate);
	$animations: '';
	@for $i from 1 through $max {
		$animations: #{$animations + nth($animate, $i)};
		@if $i < $max {
			$animations: #{$animations + ", "};
		}
	}
	-webkit-animation: $animations;
	-moz-animation: $animations;
	-ms-animation: $animations;
	animation: $animations;
}
// KEYFRAMES
// =================================================
@include keyframes(progress) {
	0% {
		stroke-dashoffset: 75;
		opacity: 1;
	}
	95% {
		stroke-dashoffset: 0;
		opacity: 1;
	}
	100% {
		opacity: 0;
		stroke-dashoffset: 0;
	}
}

// SWIPER
.swiper-pagination-bullet{
	background-color: transparent;
	opacity: 0.8;
	// bullet svg animation
	&--svg-animation {
		width: 20px;
		height: 20px;
		margin: 6px -7px;
		display: inline-block;
		svg {
		@include prefix(transform, rotate(-90deg));
		}
		.svg__circle-inner {
		stroke: $color-bullets;
		fill: transparent;
		@include prefix(transition, all 0.3s ease);
		}
	}
	&-active {  
		.svg__circle {
		stroke: #ff215a;
		stroke-dasharray: 75;
		stroke-dashoffset: 0;
		@include animation(progress 4s ease-in-out 1 forwards);
		}
		.svg__circle-inner {
		    fill: $color-bullets;
			stroke:#ff215a;
		}
	}
	// &.swiper-pagination-bullet-active{
	// 	&--svg-animation {
	// 		.svg__circle-inner {
	// 	    	stroke: #f00;
	// 		}
	// 	}
	// 	&-active {  
	// 		.svg__circle {
	// 		stroke: #f00;
	// 		}
	// 		.svg__circle-inner {
	// 			fill: #f00;
	// 		}
	// 	}
	// }
	}
  }
}
// swiper pagination css start
@media  (min-width:768px)  {
	.upk-salf-slider-wrapper {
		height: 550px;
		padding: 60px;
		.upk-page-scroll {
			bottom: 4%;
			display: inherit;
		}
		.upk-salf-item {
			.upk-salf-title {
				font-size: 40px;
			}
			.upk-salf-content-wrap {
				max-width: 400px;
				padding: 40px;
				padding-left: 0;
				top: 50%;
				transform: translateY(-50%);
				bottom: unset;
			}
			.upk-salf-image-wrap {
				width: 80%;
			}
		}
		.upk-salf-navigation {
			margin-top: 60px;
			margin-right: 20px;
		}
		//  .upk-salf-nav-pag-wrap {
		// 	// right: 30px;
        // }
		.upk-salf-pagi-wrap {
			margin-right: 47px;
			.swiper-pagination-bullet--svg-animation {
				margin: 6px 0;
			}
		} 
	}
}
@media (min-width: 1024px) { 
	.upk-salf-slider-wrapper {
		height: 650px;
		padding: 70px;
		.upk-page-scroll {
			bottom: 9%;
		}
		.upk-salf-item {
			.upk-salf-title {
				font-size: 50px;
			}
			.upk-salf-content-wrap {
				max-width: 460px;
				padding: 50px;
				padding-left: 0;
			}
			.upk-salf-desc {
				font-size: 16px;
			}
			.upk-salf-button {
				.link {
					font-size: 16px;
				}
			}
			.upk-salf-image-wrap {
				width: 70%;
			}
		}
		.upk-salf-navigation {
			margin-top: 85px;
			margin-right: 30px;
		}
		.upk-salf-pagi-wrap {
			margin-right: 53px;
			.swiper-pagination-bullet--svg-animation {
				margin: 6px -5px;
			}
		}
    }
}

@media (min-width: 1440px) { 
	.upk-salf-slider-wrapper {
		height: 700px;
		padding: 80px;

	.upk-salf-item {
		.upk-salf-title {
			font-size: 55px;
		}
	}
   }
}

`
 
const BannerSliderHome = () => {

    const [ bannerContents, setBannerContents ] = useState([
        {
            id: uuidv4(),
            story: "The Club is a unique platform for decision makers and influential members of the society to share knowledge and experiences, discover opportunities and cement collaborations.",
            isButton: true,
        },
        {
            id: uuidv4(),
            story: "",
            isButton: false,
        },
        {
            id: uuidv4(),
            story: "",
            isButton: false,
        },
        {
            id: uuidv4(),
            story: "",
            isButton: false,
        },
    ])

    const [ curDisplay, setCurDisplay ] = useState(1)

    return(
        <Wrapper className="banner_slider_home_container">
            {/* <div className="story_box">
                {
                    bannerContents.map((item, index) => (
                        <div className="banner_para">
                            <p className={index + 1 === curDisplay ? "banner_story" : "no_banner"}>{item.story}</p>
                            { item.isButton ? <button className="read_more_btn_banner">Read More</button> : "" }
                        </div>
                    )) 
                }
            </div>
            <div className="picture_box">
                <img src={banner_img} alt="" />
            </div> */}
            <div class="bdt-timeline-container">
  <div class="upk-salf-slider-wrapper">
        <div class="swiper-container mySwiper2">
            <div class="swiper-wrapper">
                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/1011/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400" >we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>
                        <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/1026/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                            <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/201/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                            <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
              
                <div class="upk-salf-item swiper-slide">
                    <div class="upk-salf-image-wrap">
                        <img class="upk-xanc-img" src="https://picsum.photos/id/167/1200/800" />
                    </div>
                    <div class="upk-salf-content-wrap">
                        <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                            we help you make modern interior
                        </h3>
                        <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                            <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                            <a class="link link--arrowed" href="#">read more
                                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="upk-page-scroll">
            <a class="arrow-up">
                <div class="long-arrow-left"></div>
                <span class="arrow-slide"></span>
            </a>
        </div>
        <div class="upk-salf-nav-pag-wrap">
            
            <div class="upk-salf-navigation">
                <div class="upk-button-prev upk-n-p">
                    <a class="link link--arrowed" href="#">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                            <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="upk-button-next upk-n-p">
                    <a class="link link--arrowed" href="#">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                            <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="upk-salf-pagi-wrap">
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
    </div>
        </Wrapper>
    )
}

export default BannerSliderHome