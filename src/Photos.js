import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (!photos || photos.length === 0) return null;

  // Limits array to maximum 4 items regardless of API response
  let limitedPhotos = photos.slice(0, 4);

  return (
    <section className="Photos">
      <h3>Visuals</h3>
      <div className="photo-grid">
        {limitedPhotos.map((photo, index) => (
          <a
            href={photo.src.original}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              src={photo.src.landscape}
              alt={photo.alt || "word visualization"}
            />
          </a>
        ))}
      </div>
    </section>
  );
}