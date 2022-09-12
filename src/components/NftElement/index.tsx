import React, {useState} from "react";
import {useSelector} from "react-redux";
import * as Utils from "../../utils";
import ImageContainer from "../ImageContainer";
import "./NftElementStyle.scss";
import {ReactComponent as Wish} from "../../assets/wishHeart.svg";

const NftElement = (props: any) => {
  const { nft } = props;
  const listOfNfts = useSelector((state: any) => state.nfts);
  const [isWishList,] = useState(() => {
    return isInWishList();
  });

  function isInWishList(): boolean {
    if (Utils.isNil(listOfNfts.myFavorites)) {
      return false;
    } else {
      const index = listOfNfts.myFavorites.findIndex(
        (value: any) => value.id === nft.id
      );
      return index !== -1;
    }
  }

  return (
    <div id="nftElement">
      <button id="wishButton" className="wish">
        <Wish fill={isWishList ? "red" : "#969696"} />
      </button>
      <div>
        <ImageContainer
          imageSource={
            Utils.isNil(nft?.logo)
              ? "images/noImage.png"
              : nft.logo
          }
          alt={`${nft?.name} cover`}
        />
      </div>
      <div className="nftInfoContainer">
        <div className="itemTitle">{nft?.name}</div>
      </div>
    </div>
  );
};

export default NftElement;
