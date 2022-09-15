import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import * as Utils from "../../utils";
import ImageContainer from "../ImageContainer";
import "./NftElementStyle.scss";
import { ReactComponent as Wish } from "../../assets/wishHeart.svg";
import { toggleFavorite } from "../../store/nfts";

const NftElement = (props: any) => {
  const { nft } = props;
  const dispatch = useAppDispatch();
  const listOfNfts = useAppSelector((state: any) => state.nfts);
  const [isWishList, setIsWishList] = useState(() => {
    return isInWishList();
  });

  function isInWishList(): boolean {
    if (Utils.isNil(listOfNfts.myFavorites)) {
      return false;
    } else {
      const index = listOfNfts.myFavorites.findIndex(
        (value: any) => value.token_id === nft.token_id
      );
      return index !== -1;
    }
  }

  useEffect(() => {
    setIsWishList(isInWishList());
  }, [listOfNfts]);

  return (
    <div id="nftElement">
      <button
        id="wishButton"
        className="wish"
        onClick={() => {
          dispatch(toggleFavorite(nft));
        }}
      >
        <Wish fill={isWishList ? "red" : "#969696"} />
      </button>
      <div>
        <ImageContainer
          imageSource={Utils.isNil(nft?.logo) ? "images/noImage.png" : nft.logo}
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
