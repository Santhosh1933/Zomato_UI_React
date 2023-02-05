import React from "react";
import { LocalityComponents } from "./LocalityComponents";

export const Localities = () => {
  return (
    <div className="locality">
      <p className="tit">Popular localities in and around Coimbatore</p>
      <div className="localityComponents">
        <LocalityComponents tit="RS Puram" sub="267 places"/>
        <LocalityComponents tit="Peelamedu" sub="381 places" />
        <LocalityComponents tit="Race Course" sub="82 places" />
        <LocalityComponents tit="Saibaba Colony" sub="185 places" />
        <LocalityComponents tit="Gandhipuram" sub="225 places" />
        <LocalityComponents tit="Town Hall" sub="99 places" />
        <LocalityComponents tit="Ramanathapuram" sub="141 places" />
        <LocalityComponents tit="Kalapatti" sub="62 places" />
        <div className="box" id="seemore">
          <p>see more</p>
          <i class="fa-solid fa-chevron-down"></i>
          
        </div>
      </div>
    </div>
  );
};
