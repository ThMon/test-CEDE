import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./headerContainer.scss";
import { ethers } from "ethers";
declare var window: any;
const Header = (): ReactElement => {
  const [accountMetaMask, setAccountMetaMask] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: any) => {
          // Return the address of the wallet
          setAccountMetaMask(res[0]);
          window.ethereum
            .request({
              method: "eth_getBalance",
              params: [res[0], "latest"],
            })
            .then((balance: any) => {
              // Return string value to convert it into int balance
              // Yarn add ethers for using ethers utils or
              // npm install ethers
              // Format the string into main latest balance
              setBalance(ethers.utils.formatEther(balance));
            });
        });
    }
  }, []);
  return (
    <div className="navContainer">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search NFTs App</Link>
      </nav>
      <span>{balance} Eth</span>
    </div>
  );
};

export default Header;
