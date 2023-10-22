import React from "react";
import "./ResultContainer.css";
import NameCard from "../NameCard/NameCard";

function ResultContainer({suggestName})
{
    const suggestedName=suggestName.map(suggest=>
        {
            return (
                <NameCard key={suggest} suggestNames={suggest} />
                
            )
        })
    return (
      
            
            
                
                    <div className="result-container">
                     {suggestedName}
                    </div>
                
            
      
    )

}

export default ResultContainer;
