import React from "react";
import "./style.scss";
import contactData from "../../Data/ContactData";

const Page = () => {
  return (
    <div className="contact--page">
      <div className="contact--box">
        <div className="contact--heading">
          <h2>{contactData?.heading}</h2>
        </div>
        <div className="contact--ways">
          {contactData?.contactWays?.map((way, index) => {
            return (
              <>
                <div className="contact--ways--email" key={index}>
                  <h4>{way?.email}</h4>
                  <p>{way?.des}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="contact--footer">
        <div className="contact--footer-title">
          <p>{contactData?.footer?.title}</p>
        </div>
      </div>
      <div className="contact--footer--socialLogo">
        {Object.keys(contactData?.footer?.socialMedia).map((socialHandle) => {
          switch (socialHandle) {
            case "linkedin":
              return (
                <img
                  src={"/images/linkedin.png"}
                  url={contactData?.footer?.socialMedia?.linkedin}
                />
              );
            case "medium":
              return (
                <img
                  src={"/images/medium.png"}
                  url={contactData?.footer?.socialMedia?.medium}
                />
              );
            case "facebook":
              return (
                <img
                  src={"/images/facebook.png"}
                  url={contactData?.footer?.socialMedia?.facebook}
                />
              );
            case "nba":
              return (
                <img
                  src={"/images/nba.png"}
                  url={contactData?.footer?.socialMedia?.nba}
                />
              );
            case "insta":
              return (
                <img
                  src={"/images/insta.png"}
                  url={contactData?.footer?.socialMedia?.insta}
                />
              );
            case "twitter":
              return (
                <img
                  src={"/images/twitter.png"}
                  url={contactData?.footer?.socialMedia?.twitter}
                />
              );
          }
        })}
      </div>
    </div>
  );
};

export default Page;
