import React from "react";
import "./collectionOverview.scss";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-Collection/Preview-Collection";
import { selectCollections } from "../../Redux/shop/shop.selector";
import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
