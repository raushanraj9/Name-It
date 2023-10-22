import React from "react";
import "./SearchBox.css"
function SearchBox( {HandleInputChange})
{
    return (

        <div className="search-container">
            {/* <div className=""></div> */}
            <input placeholder="Type Keywords" className="search-input" 
             onChange={(event)=> HandleInputChange(event.target.value)}
            />


        </div>
    )
}

export default SearchBox;