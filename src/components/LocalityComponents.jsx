import React from "react";

export const LocalityComponents = (props) => {
  return (
    <>
      <div className="box">
        <div className="words">
          <div className="title">{props.tit}</div>
          <div className="sub">{props.sub}</div>
        </div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>

    </>
  );
};
