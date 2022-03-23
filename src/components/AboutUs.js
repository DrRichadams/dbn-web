import React, { useState } from "react"
import "../stylesFolder/about_us_page/main_about_us.css"
import ReservedBannerSpace from "./ReservedBannerSpace"
import sec2Img from "../Resources/about_page/section2.png"
import { v4 as uuidv4 } from "uuid"
import icon1 from "../Resources/about_page/icon1.png"
import icon2 from "../Resources/about_page/icon2.png"
import icon3 from "../Resources/about_page/icon3.png"
import wcj_img from "../Resources/about_page/wcj.png"
import fees_icon1 from "../Resources/about_page/fees_icon1.png"
import fees_icon2 from "../Resources/about_page/fees_icon2.png"
import img_overlay from "../Resources/about_page/img_overlay.png"

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

    const [ whocan, setWhocan ] = useState([
        { id: uuidv4(), num: "01", text: "The Diplomatic Community" },
        { id: uuidv4(), num: "02", text: "Senior Business Executives" },
        { id: uuidv4(), num: "03", text: "Expatriates" },
        { id: uuidv4(), num: "04", text: "NGO's and IGO's" },
        { id: uuidv4(), num: "05", text: "UN Missions" },
        { id: uuidv4(), num: "06", text: "Corporates" },
        { id: uuidv4(), num: "07", text: "Gorvenment Institutions" },
        { id: uuidv4(), num: "08", text: "Creative Sector" },
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
 
            {/* <div className="who_can_join_container">
                <div className="wcj_left_box">
                    <h3 className="wcj_title">Who Can Join</h3>
                    <p className="wcj_story1 wcj_story">
                        Membership into the Club is strictly by invitation by either the Board, Secretariat or full members. Qualifying members are drawn from:
                    </p>
                    <div className="wcj_params">
                        <div className="wcj_params_box_1 wcj_params_box">
                            {
                                whocan.map((item, index) => (
                                    index <= 3 ? <div className="whocan_box">
                                    <div className="whocan_num">{item.num}</div>
                                    <div className="item_text">{item.text}</div>
                                </div> : ""
                                ))
                            }
                        </div>
                        <div className="wcj_params_box_2 wcj_params_box">
                            {
                                whocan.map((item, index) => (
                                    index >= 4 ? <div className="whocan_box">
                                    <div className="whocan_num">{item.num}</div>
                                    <div className="item_text">{item.text}</div>
                                </div> : ""
                                ))
                            }
                        </div>
                    </div>
                    <p className="wcj_story2 wcj_story">
                        Individuals, corporates or bodies within the qualifying categories are free to make an application with the Club which will then be reviewed before an invitation to join is submitted.
                    </p>
                    <button className="wcj_btn">
                        Register To Join
                    </button>
                </div>
                <div className="wcj_right_box">
                    <img src={wcj_img} alt="" />
                </div> 
            </div> */}
            <div className="fees_subscriptions">Membership Fees and Subscriptions</div>

            <div className="fees_subscription_boxes">
                <div className="fsb fsb1">
                    <div className="fsb_contain">
                        <img src={fees_icon1} alt="" />
                        <p className="fsb_fees">Individuals: $150</p>
                        <p className="separate_para1 paras">{"$50 joining fee & $100 annual subscription"}</p>
                    </div>
                </div>

                <div className="fsb fsb2">
                    <div className="fsb_contain">
                        <img src={fees_icon2} alt="" />
                        <p className="fsb_fees">Corporates: $500</p>
                        <p className="separate_para2 paras">{"$150 joining fee & $300 annual subscription "}</p>
                    </div>
                </div>
            </div>

            <div className="benefits">
                <div className="left_benefits">
                    <h3 className="benefits_title">Additional Benefits</h3>
                    <ul className="act_benefit_points">
                        <li>Access to the Diplomat Business Networking Club’s events, database and resource centre</li>
                        <li>Free membership to the Diplomat Lounge featuring unique dining experiences, conference rooms and business lounge.</li>
                        <li>Exclusive lifestyle discounts and privilege service from our partners</li>
                        <li>Exposure in the Diplomat Magazine physical and digital platforms with preferential rates and placements</li>
                        <li>Market linkages and business development opportunities</li>

                    </ul>
                </div>
                <div className="right_benefits">
                    <img src={img_overlay} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs