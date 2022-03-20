import React, { useState } from "react"
import "../stylesFolder/about_us_page/main_about_us.css"
import ReservedBannerSpace from "./ReservedBannerSpace"
import sec2Img from "../Resources/about_page/section2.png"
import { v4 as uuidv4 } from "uuid"
import icon1 from "../Resources/about_page/icon1.png"
import icon2 from "../Resources/about_page/icon2.png"
import icon3 from "../Resources/about_page/icon3.png"

const AboutUs = () => {
    const [ threeboxes ] = useState([
        {
            id: uuidv4(),
            img: "icon1",
            title: "Connections",
            text: "We organize high profile events with strong networking power, interesting topics & B2B connections for our members",
        },
        {
            id: uuidv4(),
            img: "icon2",
            title: "Partnerships",
            text: "We partner sport, cultural, charity & sustainable development efforts that empowers communities through information, knowledge and resource sharing",
        },
        {
            id: uuidv4(),
            img: "icon3",
            title: "Development",
            text: "We provide a business, public affairs and development resource and linkage centre for our members",
        },
    ])
    return(
        <div className="about_us_page_container">
            <ReservedBannerSpace />
            <div className="about_page_section2">
                <div className="aps2_img_box">
                    <img src={sec2Img} alt="section 2" />
                </div>
                <div className="aps2_details_box">
                    <h3 className="aps2_details_title">About Us</h3>
                    <p className="aps2_details_story">
                        Diplomat Business Networking Club is a high profile social and business networking organisation that connects diplomats, senior business executives, policy makers, government officials, civil society, private sector, media and other key stakeholders in a diverse and multi-cultural atmosphere of positive dialogue, goodwill and opportunity.
                    <br /><br />
                         Established by the Diplomacy Appreciation Trust in December 2020, the Club is voluntary, non-profit, non-political and independent.
                    </p>
                </div>
            </div>

            <div className="what_we_do">
                <div className="wwd_title">What We Do</div>
                <div className="wwd_story">
                    The Club is a unique platform for decision makers and influential members of the society to share knowledge and experiences, discover opportunities and cement collaborations.
                </div>
            </div>

            <div className="three_boxes_container">
                {
                    threeboxes.map((item, index) => (
                        <div className="tb_box">
                            <div className="indicator">{index + 1}</div>
                            <img src={
                                item.img === "icon1" ? icon1 : item.img === "icon2" ? icon2 : icon3
                            } alt="icon" className="tb_icon" />
                            <h3 className="tb_title">{ item.title }</h3>
                            <p className="tb_text">{ item.text }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutUs