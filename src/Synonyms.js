import React from "react";

export default function Synonyms(props){
    if (props.synonyms) {
        return (
            <div className="Synonyms">
            <strong>Synonyms: </strong>   {props.synonyms.join(", ")}
            </div>
        );
    } else {
        return null;
    }
}