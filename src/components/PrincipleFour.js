import {
  useState,
  useEffect,
} from "react";
import NextBtn from "./NextBtn";
import codexTexts from "../data/codexTexts";

const PrincipleFour = ({
  moveToNextPrinciple,
}) => {
  const [
    fourthPrinciple,
    setFourthPrinciple,
  ] = useState(codexTexts);
  const [
    printFourthPrinciple,
    setPrintFourthPrinciple,
  ] = useState("");

  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = fourthPrinciple[3].slice(
      0,
      index
    );
    index++;

    setPrintFourthPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(fourthPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexFour"
    >
      <h1 className="title">Respect</h1>

      <div className="samuraiIntro">
        {printFourthPrinciple}
      </div>

      <NextBtn
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
    </div>
  );
};

export default PrincipleFour;
