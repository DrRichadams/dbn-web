/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react"
import "../../../stylesFolder/banner_slider_home.css"
import { v4 as uuidv4 } from "uuid"
import banner_img from "../../../Resources/banner_img.png";
import styled from 'styled-components';
import effect1 from "../../../Resources/effect1.png"
  
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
        < >
			
          {/* <div className="story_box">
                {
                    bannerContents.map((item, index) => (
                        <div className="banner_para">
                            <p className={index + 1 === curDisplay ? "banner_story" : "no_banner"}>{item.story}</p>
                            { item.isButton ? <button className="read_more_btn_banner">Read More</button> : "" }
                        </div>
                    )) 
                }
                <img src={effect1} alt="" className="effect1_banner_land" />
            </div>
            <div className="picture_box">
                <img src={banner_img} alt="" />
            </div>
        </div>  */}
		
        </>  
    )
} 

export default BannerSliderHome