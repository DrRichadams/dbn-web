import React from "react"
import "../../stylesFolder/footer_main.css"
import footer_logo from "../../Resources/NavBarLogo.png"

const Footer = () => {
    return (
        <div className="main_footer_container">
            <div className="upper_main_footer">
                <div className="upper_left_main_footer">
                    <img src={footer_logo} className="footer_logo" />
                    <p className="footer_story">
                        Established by the Diplomacy Appreciation Trust in December 2020, the Club is voluntary, non-profit, non-political and independent. The Club is a unique platform for decision makers and influential members of the society to share knowledge and experiences, discover opportunities and cement collaborations.
                    </p>
                </div>
                <div className="upper_right_main_footer">
                    <div className="footer_quick_links">
                        <h3 className="quick_links_title">Quick Links</h3>
                        <ul className="quick_links footer_links">
                            <li>About Us</li>
                            <li>Events</li>
                            <li>Club Charter</li>
                            <li>Photo Gallery</li>
                            <li>Join Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer_contact_us">
                    <h3 className="footer_contact_us_title">Contact Us</h3>
                        <ul className="quick_links footer_links">
                            <li>club@diplomat.co.zw</li>
                            <li>+263772166285</li>
                            <li>+263773407466</li>
                            <li>+263772393069</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lower_main_footer">
                <div className="lmf_left">All Rights Reserved</div>
                <div className="lmf_right">Powered by NoWalls Media</div>
            </div>
        </div>
    )
}

export default Footer