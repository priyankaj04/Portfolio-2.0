import React from "react";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, newTab, theme }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.text,
          backgroundColor: "#8b5cf6",
          border: `solid 1px #8b5cf6`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.text, "#8b5cf6")}
      >
        {text}
      </a>
    </div>
  );
}
