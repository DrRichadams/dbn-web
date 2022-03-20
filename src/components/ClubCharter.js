import React, { useState } from "react"
import "../stylesFolder/club_charter_page/main_club_charter.css"
import { v4 as uuidv4 } from "uuid"
import ReserverdBannerSpace from "./ReservedBannerSpace"
import sec2Img from "../Resources/club_charter_page/charter_img.png"
import icon1 from "../Resources/about_page/icon1.png"
import icon2 from "../Resources/about_page/icon2.png"
import icon3 from "../Resources/about_page/icon3.png"

const ClubCharter = () => {
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
    return (
        <div className="club_charter_container">
            <ReserverdBannerSpace />
            <div className="about_page_section2">
                <div className="aps2_img_box">
                    <img src={sec2Img} alt="section 2" />
                </div>
                <div className="aps2_details_box">
                    <h3 className="aps2_details_title">The Club</h3>
                    <p className="aps2_details_story">
                        Diplomat Business Networking Club is a high profile social and business networking organisation that connects diplomats, senior business executives, policy makers, government officials, civil society, private sector, media and other key stakeholders in a diverse and multi-cultural atmosphere of positive dialogue, goodwill and opportunity.
                    <br /><br />
                        Our membership based, by invitation only organization is, voluntary non-profit, non-political and independent. It was established by the Diplomacy Appreciation Trust in December 2020
                    </p>
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
            <div className="club_charter_btn">
                <button className="club_charter_btn_btn">
                    Download Club Charter PDF
                </button>
            </div>
        </div>
    )
}

export default ClubCharter

