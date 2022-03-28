import React, { useState } from "react"
import "../stylesFolder/club_charter_page/main_club_charter.css"
import { v4 as uuidv4 } from "uuid"
import sec2Img from "../Resources/club_charter_page/charter_img.png"
import icon1 from "../Resources/about_page/icon1.png"
import icon2 from "../Resources/about_page/icon2.png"
import icon3 from "../Resources/about_page/icon3.png"
import Paragraph from "../styled/Paragraph"
import Heading from "../styled/Heading"
import styled from 'styled-components';

const Wrapper = styled.section`
    p{
        margin-bottom:20px;
    }
    .three_boxes_container{
        text-align:center;
        @media(min-width:768px){
            .tb_box{
                width:30%;
                max-width:350px;
                min-height:300px;
            }
            .indicator{
                transform: translateY(-45px) translateX(-135px);
            }
        }
        h3{
            margin-bottom:20px;
        }
    }
    .about_page_section2{
        padding-top:50px;
        padding-bottom:50px;
    }
`

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
        <Wrapper className="club_charter_container">
            <div className="about_page_section2">
                <div className="aps2_img_box">
                    <img src={sec2Img} alt="section 2" />
                </div>
                <div className="aps2_details_box">
                    <Heading>The Club</Heading>
                    <Paragraph className="aps2_details_story">
                        Diplomat Business Networking Club is a high profile social and business networking organisation that connects diplomats, senior business executives, policy makers, government officials, civil society, private sector, media and other key stakeholders in a diverse and multi-cultural atmosphere of positive dialogue, goodwill and opportunity.
                  </Paragraph>  <Paragraph>
                        Our membership based, by invitation only organization is, voluntary non-profit, non-political and independent. It was established by the Diplomacy Appreciation Trust in December 2020
                    </Paragraph>
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
                            <Paragraph>{ item.text }</Paragraph>
                        </div>
                    ))
                }
            </div>
            <div className="club_charter_btn">
                <a download={true} href={process.env.PUBLIC_URL + "/resources_folder/downloads/doc.pdf"} className="club_charter_btn_btn">
                    Download Club Charter PDF
                </a>
            </div>
        </Wrapper>
    )
}

export default ClubCharter

