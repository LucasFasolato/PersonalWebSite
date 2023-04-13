import React from "react";
import "./buttonKnowMore.css";

function ButtonKnowMore() {
  return (
    <a
      className="a_contact"
      href="https://linktr.ee/lucasfasolato"
      target="_blank"
      rel="noreferrer"
    >
      <button className="btn-101">
        Saber más
        <svg>
          <defs>
            <filter id="glow">
              <fegaussianblur
                result="coloredBlur"
                stddeviation="5"
              ></fegaussianblur>
              <femerge>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="SourceGraphic"></femergenode>
              </femerge>
            </filter>
          </defs>
          <rect />
        </svg>
      </button>
    </a>
  );
}

export default ButtonKnowMore;
