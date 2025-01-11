import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import data from '../DataBase/project.json';
import ProjectModal from "./ProjectModal";
import Project1Thumbnail from "../Assets/Project1Thumbnail.png";

const Projects = () => {
const allProjects = data;
const {projects} = allProjects;
const imageMap = {
        "Project1Thumbnail.png":Project1Thumbnail
    }

const [selectedProject, setSelectedProject] = useState(null);
const navigate = useNavigate();

const handelProjectClick = (project) => {
    if(project.passkey){
        setSelectedProject(project)
    }else{
        navigate(`/projects/${project.id}`,{state:{project:project}})
    }
};
    return(
        <div className="project_pages">
            <div className="heading_project heading_text">Projects</div>            
            <div className="row">
                {projects.map((project,index) => (
                    <div className="col-md-4">
                        <div className="custom_adjust">
                        <div className="each_project" key={index}>
                            <div className="thumnai_image"><img src={imageMap[project.thumnailsrc]} alt={project.id}  className="img-fluid" /></div>
                            <div className="short_berif_details">
                                <div className="project_header">{project.heading}</div>
                                <div className="thum_txt">{project.description}</div>
                                <div className="readmore_btn" onClick={() => handelProjectClick(project)}><div className="btn_txt">Read More</div></div>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}

                {selectedProject && (
                    <ProjectModal 
                        project = {selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                        onPasswordSuccess = {(project) => {setSelectedProject(null)
                        navigate(`/projects/${project.id}`,{state:{project:project}})
                    }}
                    />
                )}
            </div>
            
        </div>
    )
}

export default Projects;