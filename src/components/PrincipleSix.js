import {
  useState,
  useEffect,
} from "react";
import NextBtn from "./NextBtn";
import codexTexts from "../data/codexTexts";

const PrincipleSix = ({
  moveToNextPrinciple,
}) => {
  const [
    sixthPrinciple,
    setSixthPrinciple,
  ] = useState(codexTexts);
  const [
    printSixthPrinciple,
    setPrintSixthPrinciple,
  ] = useState("");

  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = sixthPrinciple[5].slice(
      0,
      index
    );
    index++;

    setPrintSixthPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(sixthPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexSix"
    >
      <h1 className="title">Honor</h1>

      <div className="samuraiIntro">
        {printSixthPrinciple}
      </div>

      <NextBtn
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
    </div>
  );
};

export default PrincipleSix;
