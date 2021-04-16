import React from "react";
import CollectionComponent from "../collection-item/Collection-item";
import "./preview-Collection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...item }) => (
            <CollectionComponent key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
