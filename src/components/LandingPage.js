import React from "react"
import "../stylesFolder/landing_page.css"
import BannerSliderHome from "./features/landingPage/BannerSliderHome"
import AboutSect from "./features/landingPage/AboutSect"
import BlogPostHighlights from "./features/landingPage/BlogPostHighlights"

const LandingPage = () => {
    return(
        <div className="landing_page_container">
            <BannerSliderHome />
            <AboutSect />
            <BlogPostHighlights />
        </div>
    )
}

export default LandingPage