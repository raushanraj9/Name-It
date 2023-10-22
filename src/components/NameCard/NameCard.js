import React from "react";
import "./NameCard.css";
function NameCard({suggestNames})
{
    const URL="https://www.namecheap.com/domains/registration/results/?domain=%27%3B";
    return (
        <a className="urldeco" href={`${URL}`}>
            <div className="result-name-card">
            <p className="result-name">
                    {suggestNames}
            </p>
        </div>
        </a>
    )
}

export default NameCard;