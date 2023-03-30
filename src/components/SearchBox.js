import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa3">
            <input type="search" placeholder="search robot" className="pa3 b--white bg-lightest-blue ba" onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;