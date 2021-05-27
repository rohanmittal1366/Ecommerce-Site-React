import PreviewCollection from "../preview-Collection/Preview-Collection.js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollections } from "../../Redux/shop/shop.selector";

const ShopPage = ({ collections }) => {
  return (
    <div className="Shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
