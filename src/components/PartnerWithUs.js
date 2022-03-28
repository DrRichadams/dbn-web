import React from "react"
import "../stylesFolder/partner/partner_main.css"
import partner_banner from "../Resources/partner/partner_banner.png"

const PartnerWithUs = () => {
    return(
        <div className="partner_main_container">
        

            <div className="partner_button_container">
                <a download={true} href={process.env.PUBLIC_URL + "/resources_folder/downloads/doc.pdf"} className="partner_bottom_btn">Download Club Charter PDF</a>
            </div>
        </div> 
    )
}

export default PartnerWithUs;