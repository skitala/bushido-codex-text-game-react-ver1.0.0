import {
  useState,
  useEffect,
} from "react";
import NextBtn from "./NextBtn";
import codexTexts from "../data/codexTexts";

const PrincipleSeven = ({
  moveToNextPrinciple,
}) => {
  const [
    seventhPrinciple,
    setSeventhPrinciple,
  ] = useState(codexTexts);
  const [
    printSeventhPrinciple,
    setPrintSeventhPrinciple,
  ] = useState("");

  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = seventhPrinciple[6].slice(
      0,
      index
    );
    index++;

    setPrintSeventhPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(seventhPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexSeven"
    >
      <h1 className="title">Loyalty</h1>

      <div className="samuraiIntro">
        {printSeventhPrinciple}
      </div>

      <NextBtn
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
    </div>
  );
};

export default PrincipleSeven;
