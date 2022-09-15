import React from "react";
import { useSelector } from "react-redux";
import NftElement from "../NftElement";
import "./nftTable.scss";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/nfts";

const NftTable = () => {
  const listOfNfts = useSelector((state: any) => state.nfts);
  const dispatch = useDispatch();

  function renderTable() {
    return (
      <>
        <div className="title">
          <h1>Discover extraordinary NFTs</h1>
        </div>
        <div className="nftTableFullContainer">
          <div id="nftTableContainer" className="nftTableContainer">
            {listOfNfts.nfts.map((value: any, index: any) => {
              return (
                <div key={value.token_hash} className="nftElementInfoContainer">
                  <NftElement nft={value} />
                </div>
              );
            })}
          </div>
          <div id="nftFavoriteContainer" className="nftFavoriteContainer">
            <h3>Wishlist</h3>
            {listOfNfts.myFavorites.map((favorite: any) => {
              return (
                <p className="favoriteText" key={favorite.token_id}>
                  <span>
                    {favorite.name
                      ? `${favorite.name}, id: ${favorite.token_id} `
                      : `inconnu, id: ${favorite.token_id} `}
                  </span>
                  <button
                    className="favoriteDeleteButton"
                    onClick={() => {
                      dispatch(toggleFavorite(favorite));
                    }}
                  >
                    X
                  </button>
                </p>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  function isNil(value: any) {
    return value === undefined || value === null;
  }

  return <div>{!isNil(listOfNfts.nfts) ? renderTable() : null}</div>;
};

export default NftTable;
