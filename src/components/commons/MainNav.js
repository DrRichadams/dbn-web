import React from "react"
import "../../stylesFolder/main_nav.css"
import { IoMenu } from "react-icons/io5";
import nav_bar_logo from "../../Resources/NavBarLogo.png"

const MainNav = () => {
    return(
        <nav className="main_nav_container">
            <div className="left_nav_content">
                <div className="menu_btn">
                    <div className="menu_btn_bar bar1"></div>
                    <div className="menu_btn_bar bar2"></div>
                    <div className="menu_btn_bar bar3"></div>
                </div>
                <img className="logo_img" src={nav_bar_logo} alt="Logo" />
            </div>
            <div className="right_nav_content">
                <button className="join_us_nav_btn">Join Us</button>
                <button className="contact_us_nav_btn">Contact Us</button>
            </div>
        </nav>
    )
}

export default MainNav