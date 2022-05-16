import React from "react";
import "./style.scss";
import TeamCard from "./TeamCard/TeamCard";
import TeamData from "../../Data/TeamData";

const Page = () => {
  return (
    <div className="team--page">
      <div className="heading">
        <h3>{TeamData?.heading}</h3>
      </div>
      <div className="members">
        {TeamData?.teamMembers?.map((member) => {
          return <TeamCard member={member} />;
        })}
      </div>
      <div className="footer">
        <h3>{TeamData?.footer}</h3>
      </div>
    </div>
  );
};

export default Page;
