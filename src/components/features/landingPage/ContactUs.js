import React, { useState } from "react"
import "../../../stylesFolder/land_contact_us.css"
import { v4 as uuidv4 } from "uuid"
import { CgAsterisk } from "react-icons/cg";

const ContactUs = () => {

    const [ motos, setMotos ] = useState([
        { id: uuidv4(), moto: "Work" },
        { id: uuidv4(), moto: "Think" },
        { id: uuidv4(), moto: "Network" },
        { id: uuidv4(), moto: "Creative" },
    ])

    const [ current, setCurrent ] = useState(3)


    return( 
        <div className="land_contact_us_container">
            <div className="lp_contact_circle">
                <p>Contact Us</p>
            </div>
            <div className="motos_box">
                {
                    motos.map((moto, index) => (
                        <div 
                            className="moto_box_contents"
                            style={{
                                opacity: index + 1 === current ? 1 : 0.4
                            }}>
                            <p>{moto.moto}</p>
                            <CgAsterisk size={40} color="white" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ContactUs