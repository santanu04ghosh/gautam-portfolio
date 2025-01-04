import React from "react";
import hero_image from '../Assets/hero_image.png';


const HeroBanner = (props) => {
    const {herodata} = props;

    return(
        <div className="hero_banner_section row">
            <div className="hero_text_section col-md-6">
                <div className="big_heading">{herodata.header_txt}</div>
                <div className="sub_heading_hero">{herodata.header_description}</div>
            </div>
            <div className="hero_image_section col-md-6">
                <img src={hero_image}  className="img-fluid" width={500} alt="hero Image" />
            </div>
            
        </div>
    )
}

export default HeroBanner;