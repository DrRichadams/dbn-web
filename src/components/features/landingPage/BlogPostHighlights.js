/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "../../../stylesFolder/blog_post_highlights.css"
import bph1 from "../../../Resources/landing_blog/bph1.png"
import bph2 from "../../../Resources/landing_blog/bph2.png"
import bph3 from "../../../Resources/landing_blog/bph3.png"
import bph1_icon from "../../../Resources/landing_blog/bph1_icon.png"
import bph2_icon from "../../../Resources/landing_blog/bph2_icon.png"
import bph3_icon from "../../../Resources/landing_blog/bph3_icon.png"
import Paragraph from "../../../styled/Paragraph"

const BlogPostHighlights = () => {
    return( 
        <div className="blog_post_highlights_container">
            <div className="bph_main_title">Blog Post Highlights</div>
            <div className="bph_sec_title">The Club is a unique platform for decision makers and influential members of the society to share knowledge and experiences, discover opportunities and cement collaborations.</div>
            <div className="bph_boxes_container">
                <div className="box box1">
                    <div className="bph_box_img">
                        <img src={bph1} className="bph_big_img" />
                        <img src={bph1_icon} className="bph_small_img" />
                    </div>
                    <div className="bph_story_box">
                        <h3 className="bph_small_story">Blog Post Highlights</h3>
                        <Paragraph>The Club is a unique platform for decision makers and influential members of the society to share knowledge and experiences, discover opportunities and cement collaborations.</Paragraph>
                    </div>
                </div>

                <div className="box box2">
                    <div className="bph_box_img">
                        <img src={bph2} className="bph_big_img" />
                        <img src={bph2_icon} className="bph_small_img" />
                    </div>
                    <div className="bph_story_box">
                        <h3 className="bph_small_story">Blog Post Highlights</h3>
                        <Paragraph>The Club is a unique platform for decision makers and influential members of the society to share knowledge and experiences, discover opportunities and cement collaborations.</Paragraph>
                    </div>
                </div>

                <div className="box box3">
                    <div className="bph_box_img">
                        <img src={bph3} className="bph_big_img" />
                        <img src={bph3_icon} className="bph_small_img" />
                    </div>
                    <div className="bph_story_box">
                        <h3 className="bph_small_story">Blog Post Highlights</h3>
                        <Paragraph>The Club is a unique platform for decision makers and influential members of the society to share knowledge and experiences, discover opportunities and cement collaborations.</Paragraph>
                    </div>
                </div>
        
            </div>
        </div>
    )
}

export default BlogPostHighlights