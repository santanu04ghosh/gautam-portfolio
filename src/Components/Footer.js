import React from "react";
import { Link } from "react-router-dom";

const Footer =() => {

    return(
        <div className="footer_section">
            <div className="footer_field">Reach Out!</div>
            <div className="reached_out_section">
                <div className="d-flex">
                    <div className="each_field_button">
                        <div className="download_resume"><a href="/images/myw3schoolsimage.jpg" download>Download Resume</a></div>
                    </div>
                    <div className="each_field_button">
                        <div className="my_project">
                            <Link to="/project">My Project</Link>
                        </div>
                    </div>
                    <div className="each_field_button">
                        <div className="my_publication">
                            <Link to="/publication">My Publication</Link>
                        </div>
                    </div>
                </div>
                <div className="phone_contact">
                    <div className="text_field">Phone:</div>
                    <div className="contanct_no">+91-9433735135</div>
                </div>
                <div className="email_contact">
                    <div className="text_field">Email:</div>
                    <div className="email_no">gautam2k@gmail.com</div>
                </div>
                <div className="social_media_section d-flex">
                    <div className="each_social_section"><a href="#"><i className="bi bi-linkedin"></i></a></div>
                    <div className="each_social_section"><a href="#"><i className="bi bi-youtube"></i></a></div>
                    <div className="each_social_section"><a href="#"><i class="bi bi-instagram"></i></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;