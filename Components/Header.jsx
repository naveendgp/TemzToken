import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = ({
  setAccount,
  setOwnerModel,
  shortenAddress,
  detail,
  currency,
  ownerModel,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    setAccount(accounts[0]);
  };

  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  };

  return (
    <header className="site-header header--transparent ico-header">
      <div className="header__main-wrap">
        <div className="container mxw_1640">
          <div className="header__main ul_li_between">
            <div className="header__left ul_li">
              <div className="header__logo">
                <a href="/">
                  <img src="assets/img/logo/logo.svg" alt="Logo" />
                </a>
              </div>
            </div>

            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active has-mega-menu">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="scrollspy-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => setOwnerModel(!ownerModel)}
                    >
                      Tools
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* <div className="header__account">
              {isConnected ? (
                <div>
                  {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
                  {address && (
                    <div>{ensName ? `${ensName} (${address})` : address}</div>
                  )}
                  <button onClick={() => disconnect()}>Disconnect</button>
                </div>
              ) : (
                <>
                  {connectors.map((connector) => (
                    <div key={connector.id} className="header__account">
                      <a
                        onClick={() => connect({ connector })}
                        style={{ cursor: "pointer" }}
                      >
                        {connector.name}
                      </a>
                    </div>
                  ))}
                </>
              )}
            </div> */}

            <div className="header__action ul_li">
              <div className="d-xl-none">
                <a className="header__bar hamburger_menu">
                  <div className="header__bar-icon">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </div>
              {/* {detail && (
                <div className="header__account">
                  <a
                    onClick={() =>
                      navigator.clipboard.writeText(detail?.address)
                    }
                  >
                    {shortenAddress(detail?.address)}:{" "}
                    {detail?.maticBal.slice(0, 6)}
                    {currency}
                  </a>
                </div>
              )} */}
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
