import { Route } from "react-router";
import Collection from "../../pages/collection/Collection.js";
import CollectionOverview from "../collection-overview/CollectionOverview.js";

const ShopPage = ({ match }) => {
  return (
    <div className="Shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
