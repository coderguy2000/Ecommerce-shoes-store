import React from "react";
import "./style.scss";

import { Link } from "react-router-dom";

const MobileNav = ({ appHeaderData, openOverlay, setOpenOverlay }) => {
  return (
    <div className={`overlay`}>
      <div className="mobileNav-menu">
        <div className="header">
          <div className="user-menu">
            <img src={"/images/userImage.png"} width={30} height={30} />
            <div className="username">
              <p>{appHeaderData?.userName}</p>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          {appHeaderData?.navManu?.map((menu, index) => {
            return (
              <>
                <div className="menu" key={index}>
                  <h2>
                    <Link to={menu?.url} onClick={() => setOpenOverlay(false)}>
                      {menu?.name} <img src={"/svg/right-arrow.png"} />
                    </Link>
                  </h2>
                </div>
              </>
            );
          })}
        </div>
        <div className="cross-icon" onClick={() => setOpenOverlay(false)}>
          <img src={"/svg/hamburger-cross.png"} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
