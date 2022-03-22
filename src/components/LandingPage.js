import React from "react"
import "../stylesFolder/landing_page.css"
import AboutSect from "./features/landingPage/AboutSect"
import BlogPostHighlights from "./features/landingPage/BlogPostHighlights"
import UpcomingEvents from "./features/landingPage/UpcomingEvents"
import Members from "./features/landingPage/Members"
import ContactUs from "./features/landingPage/ContactUs"
import BannerSliderHome from "./features/landingPage/BannerSliderHome"

const LandingPage = () => {
    return(
        <div className="landing_page_container">
           <BannerSliderHome />
            <AboutSect />
            <BlogPostHighlights />
            <UpcomingEvents />
            <Members />
            <ContactUs />
        </div>
    )
}

export default LandingPage