import React, { useState } from "react";
import NavItem from "./NavItem";
import "./style.scss";
import Media from "react-media";
import MobileNav from "./MobileNav/MobileNav";
import MobileCart from "./MobileCart/MobileCart";

const AppHeader = () => {
  const appHeaderData = {
    userName: "Gagan",
    navManu: [
      { name: "HOME", url: "/" },
      { name: "THE JOURNEY", url: "/the-journey" },
      { name: "TEAM", url: "/team" },
      { name: "STORE", url: "/store" },
      { name: "CONTACT", url: "/contact" },
    ],
  };

  const [openOverlay, setOpenOverlay] = useState(false);
  const [openCartOverlay, setOpenCartOverlay] = useState(false);
  return (
    <div className="main-menu-upper">
      <Media query={{ maxWidth: 720 }}>
        {(matches) =>
          matches ? (
            <div className="mobile--appheader">
              <div
                className="hamburger"
                onClick={() => {
                  setOpenOverlay(true);
                }}
              >
                <img src={"/svg/hamburger-menu.svg"} />
              </div>
              <div
                className={`mobileNav ${!openOverlay ? "overlay-remove" : ""}`}
              >
                <MobileNav
                  appHeaderData={appHeaderData}
                  openOverlay={openOverlay}
                  setOpenOverlay={setOpenOverlay}
                />
              </div>
              <div className="logo">
                <img src={"/images/websitelogo.png"} width={50} height={50} />
              </div>
              {/* <div className="user-menu">
                <img src={"/images/userImage.png"} width={30} height={30} />
                <div className="username">
                  <p>{appHeaderData?.userName}</p>
                </div>
              </div> */}
              <div className="cart--icon">
                <div
                  className="cart"
                  onClick={() => {
                    setOpenCartOverlay(true);
                  }}
                >
                  <img src={"/svg/cart-icon.gif"} />
                </div>
                <MobileCart
                  openCartOverlay={openCartOverlay}
                  setOpenCartOverlay={setOpenCartOverlay}
                />
              </div>
            </div>
          ) : (
            <div className="desktop--appheader">
              <div className="logo">
                <img src={"/images/websitelogo.png"} width={50} height={50} />
              </div>
              <div className="header-data">
                {appHeaderData?.navManu?.map((header, index) => {
                  return <NavItem header={header} key={index} />;
                })}
              </div>
              <div className="user-menu">
                <img src={"/images/userImage.png"} width={30} height={30} />
                <div className="username">
                  <p>{appHeaderData?.userName}</p>
                </div>
              </div>
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default AppHeader;
