import React, { ReactElement } from "react";
import "./homeContainer.scss";
import NFTLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Home = (): ReactElement => {
  return (
    <div>
      <h1>Welcome to NFT Search</h1>
      <div className="homeLogoContainer">
        <img src={NFTLogo} alt="NFT logo" />
      </div>
      <p>Here you can search all your NFTs in your wallet.</p>
      <p>You can also add your favorite NFTs in a wishlist</p>
      <Link className="button-start" to="/search">
        Go to app
      </Link>
    </div>
  );
};

export default Home;
