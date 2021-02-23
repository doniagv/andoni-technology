import React from "react";
import Card from "./Card/Card";
import "./Cards.css";
import { ReactComponent as WebSvg } from "../../assets/images/Skills/undrawWeb2.svg";
import { ReactComponent as BackSvg } from "../../assets/images/Skills/undrawBack.svg";
import { ReactComponent as ReactSvg } from "../../assets/images/Skills/undrawReactB.svg";
import { ReactComponent as WordpressSvg } from "../../assets/images/Skills/undrawWordpress.svg";
import { ReactComponent as ShopSvg } from "../../assets/images/Skills/undrawShop.svg";
import { ReactComponent as JavascriptSvg } from "../../assets/images/Skills/undrawJavascript.svg";

const cardsData = [
  {
    illustration: <WebSvg />,
    skill: "Front-end",
    description: "Description",
    level: "Advanced",
  },
  {
    illustration: <BackSvg />,
    skill: "Back-end",
    description: "Description",
    level: "Advanced",
  },
  {
    illustration: <ReactSvg />,
    skill: "Reactjs",
    description: "Description",
    level: "Advanced",
  },
  {
    illustration: <JavascriptSvg />,
    skill: "Javascript",
    description: "Description",
    level: "Advanced",
  },
  {
    illustration: <WordpressSvg />,
    skill: "Wordpress",
    description: "Description",
    level: "Advanced",
  },
  {
    illustration: <ShopSvg />,
    skill: "Woocommerce",
    description: "Description",
    level: "Advanced",
  },
];

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((item, idx) => (
        <Card
          key={idx}
          illustration={item.illustration}
          skill={item.skill}
          description={item.description}
          level={item.level}
        />
      ))}
    </div>
  );
};

export default Cards;
