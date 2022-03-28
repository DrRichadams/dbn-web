import React from "react"
import { useNavigate } from "react-router-dom"
import "../../../stylesFolder/about_sect_LP.css"
import bus_partner from "../../../Resources/landing_about/bus_partner.png"
import dev_resources from "../../../Resources/landing_about/dev_resources.png"
import knowledge_sharing from "../../../Resources/landing_about/knowledge_sharing.png"
import networking from "../../../Resources/landing_about/networking.png"
import Paragraph from "../../../styled/Paragraph"
import styled from 'styled-components';
import Heading from "../../../styled/Heading"

const Wrapper = styled.div`
    p{
        margin-bottom:20px;
    }
`

const AboutSect = () => {
    const navigate = useNavigate()
    return(
        <div className="about_sect_container">
            <div className="left_faction">
                <div className="lf_bus_partnerships"> 
                    <img src={bus_partner} alt="" />
                    <p className="sec_title">Business Partnerships</p>
                </div> 
                <div className="networking">
                    <img src={networking} alt="" />
                    <p className="sec_title">Networking</p>
                </div>
                <div className="dev_resources">
                    <img src={dev_resources} alt="" />
                    <p className="sec_title">Development Resources</p>
                </div>
                <div className="knowledge_sharing">
                    <img src={knowledge_sharing} alt="" />
                    <p className="sec_title">Knowledge Sharing</p>
                </div>
            </div>
            <Wrapper className="right_faction">
                <Heading>About Us</Heading>
                <Paragraph>
                    Diplomat Business Networking Club is a high profile social and business networking organisation that connects diplomats, senior business executives, policy makers, government officials, civil society, private sector, media and other key stakeholders in a diverse and multi-cultural atmosphere of positive dialogue, goodwill and opportunity.
                  </Paragraph> 
                  <Paragraph>Established by the Diplomacy Appreciation Trust in December 2020, the Club is voluntary, non-profit, non-political and independent.
                </Paragraph> 
                <button className="rf_btn_read" onClick={() => navigate("/about")}>Read More</button>
            </Wrapper>
        </div>
    )
}

export default AboutSect