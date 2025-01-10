import React, { useState } from "react";
import goto from "../DataBase/goto.json";
import { useNavigate } from "react-router-dom";

const ProjectModal = ({project, onClose,onPasswordSuccess}) => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const handelSubmit = (e) => {
        e.preventDefault();
        if(password === project.passkey){
            onPasswordSuccess(project);
            onClose();
            navigate(`/projects/${project.id}`,{state:{project:project}})
        }else{
            setError("Incorrect Password!")
        }
    }

    const handelKeyDown = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            handelSubmit(e)
        }
    }

    return(
        <div className="projectmodal_section">
            <div className="project_modal">
                <div className="modal_header">
                    <div className="d-flex justify-content-between">
                        <div className="modal_title">{project.heading}</div>
                        <div className="close_btn" onClick={onClose}><i className="bi bi-x-lg"></i></div>
                    </div>
                </div>
                <div className="modal_body">
                    <div className="header_txt_form">Please enter the password below</div>
                    <form onSubmit={handelSubmit} onKeyDown={handelKeyDown} className="form_section">
                        <input type="password" placeholder="Enter Password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        {error && <p style={{color:"red"}}>{error}</p>}
                        <div className="button_section">                            
                            <button className="button_close"  onClick={onClose}>Close</button>
                            <button className="button_submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectModal;