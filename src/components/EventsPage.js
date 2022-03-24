import React from "react"
import "../stylesFolder/events_page/main_events.css"
import ReservedBannerSpace from "./ReservedBannerSpace"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import event_img from "../Resources/events_page/event_img.png"

const EventsPage = () => {
    return( 
        <div className="events_page_container">
           
            <div className="events_slider">
                <div className="es_left">
                    <div className="esl_title">
                        <div className="esl_numbering">
                            <div className="esl_cur_num">1</div>
                            <div className="esl_num_devisor"></div>
                            <div className="esl_num_max">5</div>
                        </div>
                        <div className="esl_title_text">Open Walls Embassy Day</div>
                    </div>
                    <div className="esl_story">
                        This is an annual international exhibition where all embassies and UN Agencies in Zimbabwe exhibit and interact with Zimbabweans outside embassy walls.
                        <br /><br />
                        Open Walls Embassy Day provides guests a tour of the world without jetlag. The various embassies assist with information on education, employment, travel and investment. They also showcase their culture and tradition through cuisines, music, fine art and dance 
                    </div>
                    <div className="esl_controls">
                        <div className="eslc_left"><FiChevronLeft size={25} /></div>
                        <div className="eslc_right"><FiChevronRight size={25} /></div>
                    </div>
                </div>
                <div className="es_right">
                    <img src={event_img} alt="" />
                </div>
            </div> 
            <div className="events_bottomer">
                We organize high profile events with strong networking power, interesting topics & B2B connections for our members
            </div>
        </div>
    ) 
}

export default EventsPage