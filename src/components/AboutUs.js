import React from "react"
import "../stylesFolder/about_us_page/main_about_us.css"
import ReservedBannerSpace from "./ReservedBannerSpace"
import sec2Img from "../Resources/about_page/section2.png"

const AboutUs = () => {
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
        </div>
    )
}

export default AboutUs