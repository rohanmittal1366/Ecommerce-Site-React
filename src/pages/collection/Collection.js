import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/shop/shop.selector";
import "./collection.scss";

const Collection = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  Collection: selectCollection(ownProps.match.params.CollectionId)(state),
});

export default connect(mapStateToProps)(Collection);
