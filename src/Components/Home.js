import React from "react";
import About from "./About";
import HeroBanner from "./HeroBanner";

const Home = (props) => {

    const {data} = props
    console.log(props.data)
    return(
        <div className="container-fluid">
            <div className="main_page_all">
                <div className="section">
                    <div className="hero_section">
                        <HeroBanner herodata = {data.herobanner} />
                    </div>                    
                </div>
                <div className="section">
                    <div className="about_me_section">
                        <About about ={data.about}></About>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;