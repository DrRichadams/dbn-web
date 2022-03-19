import React from "react"
import "../../../stylesFolder/land_members.css"
import lm1 from "../../../Resources/landing_members/lm1.png"
import lm2 from "../../../Resources/landing_members/lm2.png"
import lm3 from "../../../Resources/landing_members/lm3.png"
import lm4 from "../../../Resources/landing_members/lm4.png"
import lm5 from "../../../Resources/landing_members/lm5.png"
import lm6 from "../../../Resources/landing_members/lm6.png"
import lm7 from "../../../Resources/landing_members/lm7.png"

import lp1 from "../../../Resources/landing_members/lp1.png"
import lp2 from "../../../Resources/landing_members/lp2.png"
import lp3 from "../../../Resources/landing_members/lp3.png"

const Members = () => {
    return(
        <div className="members_land_container">
            <h3 className="lm_title1 l_title">Members</h3>
            <div className="lm_containers"> 
                <div className="lm_four_members mp_img_container">
                    <img src={lm1} />
                    <img src={lm2} />
                    <img src={lm3} />
                    <img src={lm4} />
                </div>
                <div className="lm_three_members mp_img_container">
                     <img src={lm5} />
                     <img src={lm6} />
                     <img src={lm7} />
                </div>
            </div>
            <h3 className="lp_title1 l_title">Partners</h3>
            <div className="lp_three_members mp_img_container">
                     <img src={lp1} />
                     <img src={lp2} />
                     <img src={lp3} />
                </div>
        </div>
    )
}

export default Members