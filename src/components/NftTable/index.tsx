import React from "react";
import { useSelector } from "react-redux";
import NftElement from "../NftElement";
import "./nftTable.scss";

const NftTable = () => {

  const listOfNfts = useSelector((state: any) => state.nfts);

  function renderTable() {
    return (
      <>
        <div className="title">
          <h1>Discover extraordinary NFTs</h1>
        </div>
        <div id="nftTableContainer" className="nftTableContainer">
          {listOfNfts.nfts.map((value: any, index: any) => {
            return (
              <>
                <div
                  className="nftElementInfoContainer"
                >
                  <NftElement nft={value} key={value.id} />
                </div>
              </>
            );
          })}
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
