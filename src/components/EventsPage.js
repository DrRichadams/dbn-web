import React, { useState } from "react"
import "../stylesFolder/events_page/main_events.css"
import ReservedBannerSpace from "./ReservedBannerSpace"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import event_img from "../Resources/events_page/event_img.png"
import { v4 as uuidv4 } from "uuid"

const EventsPage = () => {

    const [ selected, setSelected ] = useState(1)
    const [ eventsData, setEventsData ] = useState([
        {
            id: uuidv4(),
            img: "e_img1.png",
            title: "Open Walls Embassy Day",
            story: "This is an annual international exhibition where all embassies and UN Agencies in Zimbabwe exhibit and interact with Zimbabweans outside embassy walls.Open Walls Embassy Day provides guests a tour of the world without jetlag. The various embassies assist with information on education, employment, travel and investment. They also showcase their culture and tradition through cuisines, music, fine art and dance"
        },
        {
            id: uuidv4(),
            img: "e_img1.png",
            title: "Open Walls Embassy Day",
            story: "This is an annual international exhibition where all embassies and UN Agencies in Zimbabwe exhibit and interact with Zimbabweans outside embassy walls.Open Walls Embassy Day provides guests a tour of the world without jetlag. The various embassies assist with information on education, employment, travel and investment. They also showcase their culture and tradition through cuisines, music, fine art and dance"
        },
        {
            id: uuidv4(),
            img: "e_img1.png",
            title: "Open Walls Embassy Day",
            story: "This is an annual international exhibition where all embassies and UN Agencies in Zimbabwe exhibit and interact with Zimbabweans outside embassy walls.Open Walls Embassy Day provides guests a tour of the world without jetlag. The various embassies assist with information on education, employment, travel and investment. They also showcase their culture and tradition through cuisines, music, fine art and dance"
        },
    ]) 

    // const paraphraser = (str) => {
    //     let mStr = ""
    //     for(let i = 0; i < str.length; i++) {
    //         mStr += str.charAt(i)
    //         if(i % 151 === 0) {
    //             mStr += <br />
    //         }
    //     }
    //     return mStr
    // }

    const goLeft = () => {
        if(selected === 1) return
        setSelected(selected - 1)
    }
    const goRight = (arr) => {
        if(selected === arr.length) return
        setSelected(selected + 1)
    }

    return( 
        <div className="events_page_container">
            <ReservedBannerSpace />
            <div className="events_slider">
                {
                    eventsData.map((item, index, arr) => (
                        <div 
                            className={index + 1 === selected ? "es_left reviewClass":"es_left"} 
                            style={{display: index + 1 === selected ? "flex":"none"}}>
                            <div className="esl_title">
                                <div className="esl_numbering">
                                    <div className="esl_cur_num">{index + 1}</div>
                                    <div className="esl_num_devisor"></div>
                                    <div className="esl_num_max">{arr.length}</div>
                                </div>
                                <div className="esl_title_text">{item.title}</div>
                            </div>
                            <div className="esl_story">
                                {
                                    item.story
                                }
                            </div>
                            <div className="esl_controls">
                                <div className="eslc_left"><FiChevronLeft size={25} onClick={() => goLeft()} /></div>
                                <div className="eslc_right"><FiChevronRight size={25} onClick={() => goRight(arr)} /></div>
                            </div>
                        </div>
                
                    ))
                }
                <div className="es_right">
                    {/* <img src={event_img} alt="" /> */}
                    <img src={process.env.PUBLIC_URL + `/resources_folder/events/e_img${selected}.png`} alt="" />
                </div>
            </div> 
            <div className="events_bottomer">
                We organize high profile events with strong networking power, interesting topics & B2B connections for our members
            </div>
        </div>
    ) 
}

export default EventsPage