import React from "react";
import about_me from '../Assets/about_me.png';
import artist from '../Assets/artist.png';
import sports from '../Assets/sports.png';
import tech from '../Assets/tech.png';
import yoga from '../Assets/yoga.png';

const About = (props) => {

    const {about} = props;
    const imageMap = {
        "yoga.png":yoga,
        "acting.png":artist,
        "sports.png":sports,
        "tech.png":tech
    }

    return(
        <div className="about_section">
            <div className="header_about section_header_size">{about.header_txt}</div>
            <div className="sub_header_section">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header_size sub_heder_header">{about.header_sub_txt}</div>
                        <div className="sub_header_body">
                        {about.description.map((items, index) => (
                            <ul>
                                <li key={items.id}>{items.details}</li>
                            </ul>
                        ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image_about">
                            <img src={about_me} width={600}  className="img-fluid" alt="About me" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hobbies_section">
                <div className="section_header_size hobbis_header">{about.hobies_txt}</div>
                <div className="hobbies_detsils_feild">
                    {about.hobbies.map((items, index) => (
                        <div className="each_hobies row" key={items.id} style={{display:"flex", flexDirection:index % 2 === 0 ? "row":"row-reverse", alignItems:"center", marginBottom:"10px"}}>
                            <div className="col-md-6">
                                <div className="image_Section">
                                    <img src={imageMap[items.imge_url]} alt={`Item ${items.id}`} className="img-fluid" style={{objectFit:"cover"}} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hobies_details_txt">
                                    <div className="header_size sub_heder_header">{items.name}</div>
                                    <div className="hobies_details">{items.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;