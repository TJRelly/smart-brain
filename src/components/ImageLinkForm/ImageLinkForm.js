import React from "react";
import "./ImageLinkForm.css";


const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3">
                {"This Magic Brain will detect faces in your pictures. Give it a try!"}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" />
                    <button className="detect f4 w-30 grow link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div >
    )
}

export default ImageLinkForm;