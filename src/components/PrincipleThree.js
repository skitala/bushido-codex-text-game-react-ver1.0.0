import {
  useState,
  useEffect,
} from "react";
import NextBtn from "./NextBtn";
import codexTexts from "../data/codexTexts";

const PrincipleThree = ({
  moveToNextPrinciple,
}) => {
  const [
    thirdPrinciple,
    setThirdPrinciple,
  ] = useState(codexTexts);
  const [
    printThirdPrinciple,
    setPrintThirdPrinciple,
  ] = useState("");

  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = thirdPrinciple[2].slice(
      0,
      index
    );
    index++;

    setPrintThirdPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(thirdPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexThree"
    >
      <h1 className="title">
        Compassion
      </h1>

      <div className="samuraiIntro">
        {printThirdPrinciple}
      </div>

      <NextBtn
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
    </div>
  );
};

export default PrincipleThree;
