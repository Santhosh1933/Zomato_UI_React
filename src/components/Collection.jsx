import React from "react";
import { CollectionItem } from "./CollectionItem";
import item1 from '../img/item1.avif';
import item2 from '../img/item2.avif';
import item3 from '../img/item3.avif';
import item4 from '../img/item4.avif';
export const Collection = () => {
  return (
    <div className="collection">
      <p className="tit">Collections</p>
      <div className="collectionRow">
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Coimbatore, based on trends
        </p>
        <p className="sub">
          All collections in Coimbatore <i class="fa-solid fa-caret-right"></i>
        </p>
      </div>
      <div className="collectionItem">
        <CollectionItem img={item1} title="Veggie Friendly" sub="9 Places"/>
        <CollectionItem img={item2} title="Sweet Tooth" sub="8 Places"/>
        <CollectionItem img={item3} title="Great Cafes" sub="5 Places"/>
        <CollectionItem img={item4} title="Great Buffets" sub="9 Places"/>
      </div>
    </div>
  );
};
