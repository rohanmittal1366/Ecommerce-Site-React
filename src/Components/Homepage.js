import React from "react";
import "./homepage_style.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title"> Hats</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title"> Jackets</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title"> Sneakers</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title"> Women</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title"> Mens</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title"> Winter-Wear</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
