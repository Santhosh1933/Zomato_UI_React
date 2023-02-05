import React from "react";

export const CollectionItem = (props) => {
  return (
    <div>
      <div className="item">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p className="sub">
          {props.sub}
          <i class="fa-solid fa-caret-right"></i>
        </p>
      </div>
    </div>
  );
};
