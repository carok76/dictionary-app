import React from "react";
import "./Pictures.css";

export default function Pictures({ pictures }) {
  if (!pictures || !Array.isArray(pictures)) return null;

  return (
    <section className="Pictures">
      {pictures.map((picture, index) => (
        <div className="PictureItem" key={index}>
          <img
            src={picture.src.landscape}
            className="PictureImg"
            alt=""
            loading="lazy"
          />
        </div>
      ))}
    </section>
  );
}