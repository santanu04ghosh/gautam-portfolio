import React, { Fragment, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './ProjectDetails.css';
import P1_Usecase from '../Assets/P1_Usecase.png';
import P1_sspSmall from '../Assets/P1_sspSmall.mp4';
import P1_IA from '../Assets/P1_IA.png'
import ArtifactsModal from "./ArtifactsModal";

const ProjectDetailsPage = () => {
const location = useLocation();
const {project} = location.state;
const {id} = useParams;
const {detaildescription} = project;
const [isModalOpen, setIsModalOpen] = useState(false)
const [currentMedia, setCurrentMedia] = useState(null);
const [mediaType, setMediaType] = useState(null)

const imageMap = {
        "P1_Usecase.png":P1_Usecase,
        
        "P1_IA.png":P1_IA
    }

const videoamp = {
"P1_sspSmall.mp4":P1_sspSmall,
}

//redner details section
const renderDetailsSection = (details) => {
    if(details.length > 0){
        return <div className="details_of_each_sec" >
            {details.map((list,index) => (                
                <div className="text_each_para" key={`each_para_${index}`}>{list.value}</div>
            
            ))}
        </div>         
    }   
}

const openModal = (media, mediaType) =>{
    setCurrentMedia(media);
    setMediaType(mediaType);
    setIsModalOpen(true)

}

const closeModal = () => {
    setIsModalOpen(false)
    setCurrentMedia(null);
    setMediaType(null);
    
}

const renderAdditionSection = (additionaldetails) => {
    return(
        <Fragment>
            <div className="header_additional_txt">{additionaldetails.header}</div>
            <div className="additional_info">
                <div className="row">
                {additionaldetails.listurls.map((item,index) => (
                    <div className="col-md-6" key={index}>
                        <div className="each_info">
                        {item.imageurl && (
                            <div className="image_field" onClick={() => openModal(imageMap[item.imageurl], item.type)}>
                                <div className="btn_click_enlarged"><i class="bi bi-arrows-angle-expand"></i></div>
                                <img src={imageMap[item.imageurl]} alt={item.id} className="img-fluid grow" style={{objectFit:"cover"}} />
                                
                            </div>
                        )}
                        {item.videourl && (
                            <div className="image_field" >
                            <div className="btn_click_enlarged"><i class="bi bi-arrows-angle-expand"></i></div>
                            <div className="ratio ratio-16x9 " onClick={() => openModal(videoamp[item.videourl], item.type)}><video  loop autoPlay style={{ objectFit:"cover"}}>
                            <source src= { videoamp[item.videourl] } type="video/mp4" />
                            
                        </video>
                            
                        </div>
                            
                           </div>
                        )}
                    </div>
                    </div>
                ))}
                </div>
                <ArtifactsModal  isOpen = {isModalOpen} media ={currentMedia} mediaType ={mediaType} onClose={closeModal}/>
                
            </div>
        </Fragment>
        
        
    )
}

    return(
        <div className="project_details_page">
            <div className="project_heading_fileds section_space">
                <div className="heading_details big_hreading text-center">{project.heading}</div>
                <div className="heading_description">{project.description}</div>
            </div>
            <div className="deatiled_description section_space">
                <div className="heading_description big_hreading">{detaildescription.heading}</div>
                {detaildescription.statements.map((items, index) => (
                    <div className="each_details_description_segement" key={index}>
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="headers_each_details">{items.heading}:</div>
                            {items.heading_details ? <div className="header_description_txt">{items.heading_details}</div>:''}
                        </div>
                        {items.subheading ? <div className="subheading_each_Details">{items.subheading}</div>:''}
                        {renderDetailsSection(items.details)}
                    </div>
                ))}
                
            </div>
            {project.additionalsegment ? <div className="addition_detaills">{renderAdditionSection(project.additionalsegment)}</div>:''}
            
        </div>
    )
}

export default ProjectDetailsPage;