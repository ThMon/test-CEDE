import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hook";
import "./SearchBar.scss";
import { getAllCollections, getCollectionsByQuery } from "../../store/nfts";
import NFTLogo from "../../assets/logo.png";

function SearchBar() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useAppDispatch();

  function handleSearch(e: any) {
    e.preventDefault();
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => dispatch(getAllCollections()), 500);
    return () => {
      return clearTimeout(timeOutId);
    };
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userInput !== "") {
        dispatch(getCollectionsByQuery(userInput));
      } else {
        dispatch(getAllCollections());
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [userInput]);

  return (
    <div id="searchbarBackground">
      <div id="searchbarMainContainer">
        <div id="searchbarLogoContainer">
          <img src={NFTLogo} alt="NFT logo" />
        </div>

        <div id="searchbarInputSpace">
          <input
            id="searchbarInputField"
            placeholder="Search for nft titles..."
            type="text"
            name="searchBar_data"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

        <div id="searchbarButton" onClick={(e) => handleSearch(e)}>
          <img src="images/lupa.png" alt="Graphic asset - Search button icon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
