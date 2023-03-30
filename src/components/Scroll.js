import React from "react";

const Scroll = (props) => {
    return(
        <div className="" style={{overflowY: 'scroll', border: '2px solid white', height: '450px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;