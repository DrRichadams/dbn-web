import React from "react"
import "../stylesFolder/photo_gallery_page/main_photo_gallery.css"
import ReservedBannerSpace from "./ReservedBannerSpace"
import rec1 from "../Resources/photo_gallery/Rectangle 101.png"
import rec2 from "../Resources/photo_gallery/Rectangle 102.png"
import rec3 from "../Resources/photo_gallery/Rectangle 103.png"
import rec4 from "../Resources/photo_gallery/Rectangle 104.png"
import rec5 from "../Resources/photo_gallery/Rectangle 105.png"
import rec6 from "../Resources/photo_gallery/Rectangle 106.png"
import rec7 from "../Resources/photo_gallery/Rectangle 107.png"
import rec8 from "../Resources/photo_gallery/Rectangle 108.png"
import rec9 from "../Resources/photo_gallery/Rectangle 109.png"
import rec10 from "../Resources/photo_gallery/Rectangle 110.png"

const PhotoGallery = () => {
    return (
        <div className="photo_gallery_container">
            <ReservedBannerSpace />
            <div className="photo_gallery_btns">
                <button className="netherlands_btn">Netherlands Gallery</button>
                <button className="turkey_btn">Turkey Gallery</button>
            </div>
            <div className="act_gallery">
                <img src={rec1} alt="" className="rec1" />
                <img src={rec2} alt="" className="rec2" />
                <img src={rec3} alt="" className="rec3" />
                <img src={rec4} alt="" className="rec4" />
                <img src={rec5} alt="" className="rec5" />
                <img src={rec6} alt="" className="rec6" />
                <img src={rec7} alt="" className="rec7" />
                <img src={rec8} alt="" className="rec8" />
                <img src={rec9} alt="" className="rec9" />
                <img src={rec10} alt="" className="rec10" />
            </div>

            <div className="download_gallery_box">
                <button className="download_gallery_btn">Download Gallery Folder</button>
            </div>
        </div>
    )
}


export default PhotoGallery