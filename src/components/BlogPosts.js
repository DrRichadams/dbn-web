import React, { useState } from "react"
import "../stylesFolder/blog_posts_page/main_blog_posts_page.css"
import { v4 as uuidv4 } from "uuid"
import ResevedBannerSpace from "./ReservedBannerSpace"
import { GoSearch } from "react-icons/go"
import article_current from "../Resources/blog_posts_page/article_current1.png"
import lat1 from "../Resources/blog_posts_page/lat1.png"
import lat2 from "../Resources/blog_posts_page/lat2.png"
import lat3 from "../Resources/blog_posts_page/lat3.png"
import lat4 from "../Resources/blog_posts_page/lat4.png"

const BlogPosts = () => { 

    const [ searchDate ] = useState([
        { id: uuidv4(), month: "January 2022" },
        { id: uuidv4(), month: "February 2022" },
        { id: uuidv4(), month: "March 2022" },
        { id: uuidv4(), month: "April 2022" },
    ])

    const [ current, setCurrent ] = useState(1)

    const [ latest, setLatest ] = useState([
        {
            id: uuidv4(),
            image: lat1,
            title: "More than another check, founders need activation energy",
            name: "By Natasha Mascarenhas",
            story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque praesentium iusto, dolores voluptatibus dolorem libero illo in molestiae distinctio.",
        },
        {
            id: uuidv4(),
            image: lat2,
            title: "More than another check, founders need activation energy",
            name: "By Natasha Mascarenhas",
            story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque praesentium iusto, dolores voluptatibus dolorem libero illo in molestiae distinctio.",
        },
        {
            id: uuidv4(),
            image: lat3,
            title: "More than another check, founders need activation energy",
            name: "By Natasha Mascarenhas",
            story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque praesentium iusto, dolores voluptatibus dolorem libero illo in molestiae distinctio.",
        },
        {
            id: uuidv4(),
            image: lat4,
            title: "More than another check, founders need activation energy",
            name: "By Natasha Mascarenhas",
            story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque atque praesentium iusto, dolores voluptatibus dolorem libero illo in molestiae distinctio.",
        },
    ])

    return(
        <div className="blog_posts_container">
            <ResevedBannerSpace />
            <div className="bp_search_bar">
                <input type="text" className="bp_search_input" placeholder="Search Article" />
                <div className="bps_icon">
                    <GoSearch size={35} />
                </div>
                
            </div>
            <div className="bps_by_month">
                {
                    searchDate.map((item, index) => (
                        <p 
                            key={item.id} 
                            className="search_date"
                            style={{opacity: index + 1 === current ? 1:0.45}}
                            onClick={() => setCurrent(index + 1)}>{item.month}</p>
                    ))
                }
            </div>
            
            <div className="featured_title">
                Featured Article
            </div>

            <div className="current_article">
                <div className="ca_img">
                    <img src={article_current} alt="" />
                </div>
                <div className="ca_title">More than another check, founders need activation energy</div>
                <div className="ca_auth_name">By Natasha Mascarenhas</div>
                <p className="ca_article">
                    As we entered 2021, I wrote about the big question on every startup’s mind for 2021: How will a cataclysmic event such as a pandemic show up in post-pandemic innovation? Well, spoiler alert: We’re nearing the end of yet another pandemic year, and it seems like this state will be our world for longer than I’d like to predict. In other words, my question didn’t age well, and today, I’d like to pose a new one.
                    <br /><br />
                    My question heading into 2022 is: How can the tech community sneak activation energy into startups, especially those built by historically overlooked founders, beyond capital? I’m not talking about hype machines or weekly luncheons on specific topics, I’m talking about more elusive services.
                    <br /><br />
                    In this cash-rich environment, I think entrepreneurs need more human resources than ever before when it comes to building their company. Don’t get me wrong, the gender gap in fundraising continues to be a blaring, embarrassing issue that venture needs to fix. But as we spotlight the need to get more checks to more founders, we also need to figure out how to keep those same founders in an increasingly competitive environment. After all, venture doesn’t fix all things — and in fact, can even complicate the growth of a startup.
                    <br /><br />
                    Activation energy can look different every day. This week, for example, I wrote about Z Fellows, an accelerator that pays people $10,000 to take a week-long break from their day job and flirt with finally building their startup idea.
                    <br /><br />
                    The average age for a Z Fellow is 20 to 25 years old, meaning that the program has successfully convinced first-time founders to take a jump. Founder Cory Levy attributes interest to the program’s pre-requisite: You only have to take one week off from work.
                </p>
            </div>

            <div className="featured_title">
                The Latest
            </div>

            <div className="bg_latest_box_container">
                {
                    latest.map((item, index) => (
                        <div key={item.id} className="bg_latest_box">
                            <div className="bgl_one">
                                <h3>{item.title}</h3>
                                <p>{item.name}</p>
                            </div>
                            <div className="bgl_two">{item.story}</div>
                            <div className="bgl_three">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPosts