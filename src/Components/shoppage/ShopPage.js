import React, { useState } from "react";
import PreviewCollection from "../preview-Collection/Preview-Collection.js";
import SHOP_DATA from "./Shop_data.js";

const ShopPage = () => {
  const [state] = useState(SHOP_DATA);

  return (
    <div className="Shop-page">
      {state.map((states) => (
        <PreviewCollection key={states.id} {...states} />
      ))}
    </div>
  );
};
export default ShopPage;
