import React from "react";
import SearchBar from "../SearchBar";
import NftTable from "../NftTable";

const Search = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <main>
        <div className="appContainer">
          <div className="appTableContainer">
            <NftTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
