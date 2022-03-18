import React, { useState } from "react"
import "../../../stylesFolder/upcoming_events_home.css"
import { v4 as uuidv4 } from "uuid"

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
        <div className="upcoming_events_container">
            <div className="upEventsLeft">
                {
                    eventsData.map((item, index) => (
                        <div className="uEventBox" style={{
                            opacity: selected === index + 1 ? "1" : "0.5"
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
            <div className="upEventsRight"></div>
        </div>
    )
}

export default UpcomingEvents