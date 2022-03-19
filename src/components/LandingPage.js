import React from "react"
import "../stylesFolder/landing_page.css"
import BannerSliderHome from "./features/landingPage/BannerSliderHome"
import AboutSect from "./features/landingPage/AboutSect"
import BlogPostHighlights from "./features/landingPage/BlogPostHighlights"
import UpcomingEvents from "./features/landingPage/UpcomingEvents"
import Members from "./features/landingPage/Members"

const LandingPage = () => {
    return(
        <div className="landing_page_container">
            <BannerSliderHome />
            <AboutSect />
            <BlogPostHighlights />
            <UpcomingEvents />
            <Members />
        </div>
    )
}

export default LandingPage