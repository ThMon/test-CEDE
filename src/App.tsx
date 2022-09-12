import React from "react";
import "./styles/App.scss";
import SearchBar from "./components/SearchBar";
import NftTable from "./components/NftTable";

function App() {
  return (
    <div>
      <header>
        <SearchBar/>
      </header>
      <main>
        <div className='appContainer'>
          <div className='appTableContainer'>
            <NftTable/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
