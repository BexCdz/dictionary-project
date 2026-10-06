import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}