import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const TeamCard = ({ member }) => {
  return (
    <div className="memberCard">
      <div className="member--image">
        <img src={member?.image} />
      </div>
      <div className="member--name">
        <h3>{member?.name}</h3>
      </div>
      <div className="member--designation">
        <h4>{member?.designation}</h4>
      </div>
      <div className="member--socialMedia">
        {Object.keys(member?.socialMedia).map((socialHandle) => {
          switch (socialHandle) {
            case "linkedin":
              return (
                <Link to={member?.socialMedia?.linkedin}>
                  <img src={"/images/linkedin.png"} />
                </Link>
              );
            case "medium":
              return (
                <Link to={member?.socialMedia?.medium}>
                  <img src={"/images/medium.png"} />
                </Link>
              );
            case "facebook":
              return (
                <Link to={member?.socialMedia?.facebook}>
                  <img src={"/images/facebook.png"} />
                </Link>
              );
            case "nba":
              return (
                <Link to={member?.socialMedia?.nba}>
                  <img src={"/images/nba.png"} />
                </Link>
              );
            case "insta":
              return (
                <Link to={member?.socialMedia?.insta}>
                  <img src={"/images/insta.png"} />
                </Link>
              );
          }
        })}
      </div>
    </div>
  );
};

export default TeamCard;
