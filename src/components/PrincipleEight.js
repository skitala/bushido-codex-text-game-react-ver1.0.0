import {
  useState,
  useEffect,
} from "react";

import codexTexts from "../data/codexTexts";

const PrincipleEight = () => {
  const [
    eighthPrinciple,
    setEighthPrinciple,
  ] = useState(codexTexts);
  const [
    printEighthPrinciple,
    setPrintEighthPrinciple,
  ] = useState("");

  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = eighthPrinciple[7].slice(
      0,
      index
    );
    index++;

    setPrintEighthPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(eighthPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexEight"
    >
      <h1 className="title">
        Self-control
      </h1>

      <div className="samuraiIntro">
        {printEighthPrinciple}
      </div>
    </div>
  );
};

export default PrincipleEight;
