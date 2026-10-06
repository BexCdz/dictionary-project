import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results) return null;

  function playAudio() {
    const utterance = new SpeechSynthesisUtterance(props.results.word);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>

      {props.results.phonetic && (
        <div className="phonetic">
          /{props.results.phonetic}/
          <button
            onClick={playAudio}
            className="audio-button"
            aria-label="Listen to pronunciation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.889l.706.707z" />
              <path d="M8.707 11.182A4.483 4.483 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182l-.708.707A3.483 3.483 0 0 1 9.025 8c0 .966-.392 1.841-1.025 2.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A1.5 1.5 0 0 1 0 9V7a1.5 1.5 0 0 1 1.5-1.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
            </svg>
          </button>
        </div>
      )}

      {props.results.meanings?.slice(0, 2).map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  );
}