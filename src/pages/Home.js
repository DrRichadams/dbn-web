import React from 'react'
import AboutSect from '../components/features/landingPage/AboutSect'
import BannerHome from '../components/features/landingPage/BannerHome'
import BlogPostHighlights from '../components/features/landingPage/BlogPostHighlights'
import ContactUs from '../components/features/landingPage/ContactUs'
import Members from '../components/features/landingPage/Members'
import UpcomingEvents from '../components/features/landingPage/UpcomingEvents'

function Home() {
  return (
    <>
     <BannerHome />
     <AboutSect />
            <BlogPostHighlights />
            <UpcomingEvents />
            <Members />
            <ContactUs />
    </>
  )
}

export default Home