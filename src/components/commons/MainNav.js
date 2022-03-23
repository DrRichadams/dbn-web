import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../stylesFolder/main_nav.css"
import { IoMenu } from "react-icons/io5";
import nav_bar_logo from "../../Resources/NavBarLogo.png"
import nav_bar_logo2 from "../../Resources/NavBarLogo2.png"
import { IoClose } from "react-icons/io5";
 
const MainNav = () => { 
    const [ menu_open, setMenu_open ] = useState(0) 
    console.log(menu_open)
    const navigate = useNavigate()
    const menubox_classes = `main_nav_menu_box mnmb_main ${menu_open === 0 ? "close_menu":"open_menu"}`
    return(
        <nav className="main_nav_container">
            <div className="left_nav_content">
                <div className="menu_btn" onClick={() => setMenu_open(1)}>
                    <div className="menu_btn_bar bar1"></div>
                    <div className="menu_btn_bar bar2"></div>
                    <div className="menu_btn_bar bar3"></div>
                </div>
                <img className="logo_img" src={nav_bar_logo} alt="Logo" onClick={() => navigate("/")} />
            </div>
            <div className="right_nav_content">
                <button className="join_us_nav_btn">Join Us</button>
                <button className="contact_us_nav_btn">Contact Us</button>
            </div>

            <div className={menubox_classes}>
                <div className="mnmb_menu_nav">
                    <div className="mnmb_left">
                        <div className="menu_btn collapsed_menu">
                            <IoClose size={35} color="#fff" onClick={() => setMenu_open(0)} />
                        </div>
                        <img className="logo_img" src={nav_bar_logo2} alt="Logo" onClick={() => navigate("/")} />
                    </div>
                    <div className="mnmb_right">
                        <button className="join_us_nav_btn mnmb_reversed">Join Us</button>
                        <button className="contact_us_nav_btn mnmb_reversed">Contact Us</button>
                    </div>
                </div>

                <div className="mnmb_menu_contents">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Events</li>
                        <li>Blog Posts</li>
                        <li>Club Charter</li>
                        <li>Partner With Us</li>
                        <li>Photo Gallery</li>
                    </ul>
                    <div className="backup_nav_btns">
                        <button className="backup_nav_btn">Join Us</button>
                        <button className="backup_nav_btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainNav