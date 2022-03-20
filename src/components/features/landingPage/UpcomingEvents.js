import React, { useState } from "react"
import "../../../stylesFolder/upcoming_events_home.css"
import { v4 as uuidv4 } from "uuid"
import ueBanner from "../../../Resources/upcoming_events/ueBanner.png"
import bph1_icon from "../../../Resources/upcoming_events/bph1_icon.png"

const UpcomingEvents = () => {

    const [ selected, setSelected ] = useState(1)
    const [ eventsData, setEventsData ] = useState([
        {
            id: uuidv4(),
            smallDate: "January 2022",
            bigDate: "12-01-2022",
            story: "The Club is a unique platform for decision makers and influential members of the society."
        },
        {
            id: uuidv4(),
            smallDate: "February 2022",
            bigDate: "12-01-2022",
            story: "The Club is a unique platform for decision makers and influential members of the society."
        },
        {
            id: uuidv4(),
            smallDate: "March 2022",
            bigDate: "12-01-2022",
            story: "The Club is a unique platform for decision makers and influential members of the society."
        },
    ])
    return (
        <>
        <div className="uerTitle">Upcoming Events</div>
        <div className="upcoming_events_container">
            <div className="upEventsLeft">
                {
                    eventsData.map((item, index) => (
                        <div className="uEventBox" style={{
                            opacity: selected === index + 1 ? "1" : "0.4"
                        }}>
                            <div className="uEvent_box_vSlide" style={{
                                backgroundColor: selected === index + 1 ? "#A32C2F" : "transparent"
                            }}></div>
                            <div className="uEvent_box_contents">
                                <div className="ue_date">{item.smallDate}</div>
                                <div className="ue_paragraph">
                                    {/* The Club is a unique platform for decision makers and influential members of the society. */}
                                    {
                                        item.story
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="upEventsRight">
                <div className="uer_mid_box">
                    <div className="uer_imgs_box">
                        <img src={ueBanner} className="uer_big_img" />
                        <img src={bph1_icon} className="uer_small_img" />
                    </div>
                    <div className="uer_texts">
                        <div className="uer_title_texts">
                            <p className="uer_title_title">Annual General Meeting</p>
                            <p className="uer_title_date">12-01-2022</p>
                        </div>
                        <p className="uer_title_story">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className="uer_dots"></div>
            </div>
        </div>
        </>
    )
}

export default UpcomingEvents