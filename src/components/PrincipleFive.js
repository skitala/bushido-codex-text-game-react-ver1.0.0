import {
  useState,
  useEffect,
} from "react";
import NextBtn from "./NextBtn";
import codexTexts from "../data/codexTexts";

const PrincipleFive = ({
  moveToNextPrinciple,
}) => {
  const [
    fifthPrinciple,
    setFifthPrinciple,
  ] = useState(codexTexts);
  const [
    printFifthPrinciple,
    setPrintFifthPrinciple,
  ] = useState("");

  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = fifthPrinciple[4].slice(
      0,
      index
    );
    index++;

    setPrintFifthPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(fifthPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexFive"
    >
      <h1 className="title">
        Integrity
      </h1>

      <div className="samuraiIntro">
        {printFifthPrinciple}
      </div>

      <NextBtn
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
    </div>
  );
};

export default PrincipleFive;
