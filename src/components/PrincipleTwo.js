import {
  useState,
  useEffect,
} from "react";
import NextBtn from "./NextBtn";
import codexTexts from "../data/codexTexts";

const PrincipleTwo = ({
  moveToNextPrinciple,
}) => {
  const [
    secondPrinciple,
    setSecondPrinciple,
  ] = useState(codexTexts);
  const [
    printSecondPrinciple,
    setPrintSecondPrinciple,
  ] = useState("");

  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = secondPrinciple[2].slice(
      0,
      index
    );
    // let text = intro[0].slice(0, index);
    index++;

    setPrintSecondPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(secondPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexTwo"
    >
      <h1 className="title">Courage</h1>
      <div className="samuraiIntro">
        {printSecondPrinciple}
      </div>

      <NextBtn
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
    </div>
  );
};

export default PrincipleTwo;
