import React from "react";
import "./Header.css"
const Header=({handleChange,headtit})=>{
    return (
        <div className="head-container">
             <img className={`head-image ${handleChange?'head-image-expanded':'head-image-contracted'}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="HeaderImage" />
            <h1 className={`head-text ${handleChange?'head-text-expanded':'head-text-contracted'}`}>{headtit}</h1>
           
             </div>
    )
}
export default Header;