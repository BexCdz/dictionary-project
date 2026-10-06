import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <span className="synonym-label">Synonyms:</span>
        {props.synonyms.map((synonym, index) => (
          <span key={index} className="pill">
            {synonym}
          </span>
        ))}
      </div>
    );
  } else {
    return null;
  }
}