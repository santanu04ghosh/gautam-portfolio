import React from "react";
import Artifatcsmodal from './Artifatcsmodal.css';

const ArtifactsModal = ({isOpen, media, mediaType,onClose}) => {

    if(!isOpen) return null;
    return(
        <div className="artifacts_modal_page">
            <div className="artifacts_overlay">
                <div className="artifacts_modal">
                    <div className="close_btn_artifacts" onClick={onClose}><i class="bi bi-x-lg"></i></div>
                    <div className="image_large_section">
                        {mediaType === "image" ? (
                            <img src={media} alt="Enlarged" style={{width:"100%",height:"100%", objectFit:"contain",borderRadius:"8px"}} />
                        ):(
                            <video src={media} controls style={{width:"100%",height:"100%", objectFit:"contain",borderRadius:"8px"}} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtifactsModal;