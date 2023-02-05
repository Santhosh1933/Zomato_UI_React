import React from "react";

export const Explore = () => {
  return (
    <div className="explore">
      <p className="tit">Explore options near me</p>
      <div className="exploreBox">
        <p>Popular cuisines near me</p>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div className="exploreBox">
        <p>Popular restaurant types near me</p>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div className="exploreBox">
        <p>Cities We Deliver To</p>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
};
