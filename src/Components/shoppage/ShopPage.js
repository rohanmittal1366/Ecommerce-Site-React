import { Route } from "react-router";
import Category from "../../pages/category/Category.js";
import CollectionOverview from "../collection-overview/CollectionOverview.js";

const ShopPage = ({ match }) => {
  return (
    <div className="Shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

export default ShopPage;
