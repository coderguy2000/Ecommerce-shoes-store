import React from "react";
import "./style.scss";

const Page = () => {
  const JourneyData = {
    heading: "THE JOURNEY",
    content: [
      {
        title: "THE ROOTS",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        title: "CHAPTER I",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        title: "CHAPTER II",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        title: "KICKSUP",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  };
  return (
    <div className="journey--page">
      <div className="heading">
        <h1>{JourneyData?.heading}</h1>
      </div>
      <ul className="journey--chapters">
        {JourneyData?.content?.map((journey) => {
          return (
            <li className="journey--data">
              <div className="journey--data--title">
                <h3>{journey?.title}</h3>
              </div>
              <div className="journey--data--desc">
                <p>{journey?.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
