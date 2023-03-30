import React from "react";
import './LoadingBar.css'

const LoadingBar = () => {
    return(
        <div className="d-flex justify-content-center" style={{color: "blue",height: "100%"}}>
            <div className="spinner-grow m-2"></div>
            <div className="spinner-grow m-2"></div>
            <div className="spinner-grow m-2"></div>
        </div>
    )
}

export default LoadingBar;