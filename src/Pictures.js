import React from "react";
import "./Pictures.css";

export default function Pictures({ pictures }) {
  if (!pictures || !Array.isArray(pictures)) return null;

  return (
    <section className="Pictures">
      {pictures.map((picture, index) => (
        <div className="PictureItem" key={index}>
            <a href={picture.src.original} target="_blank" rel="noopener noreferrer">
            <img
                src={picture.src.landscape}
                className="PictureImg"
                alt={picture.src.alt}
                loading="lazy"
            />
          </a>
        </div>
      ))}
    </section>
  );
}