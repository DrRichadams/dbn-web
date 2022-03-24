import React from "react"
import "../stylesFolder/partner/partner_main.css"
import partner_banner from "../Resources/partner/partner_banner.png"

const PartnerWithUs = () => {
    return(
        <div className="partner_main_container">
            <div className="partner_titles">
                <h3 className="p_title1">Partner With Us</h3>
                <p className="p_title2">Partner with the club</p>
            </div>
            <div className="partner_banner">
                <img src={partner_banner} alt="" />
            </div>

            <div className="partner_button_container">
                <a download={true} href={process.env.PUBLIC_URL + "/resources_folder/downloads/doc.pdf"} className="partner_bottom_btn">Download Club Charter PDF</a>
            </div>
        </div> 
    )
}

export default PartnerWithUs;