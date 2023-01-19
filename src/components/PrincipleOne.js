import {
  useState,
  useEffect,
} from "react";
import NextBtn from "./NextBtn";
import codexTexts from "../data/codexTexts";
// import Samurai from "./Samurai";
import { useRef } from "react";

const PrincipleOne = ({
  moveToNextPrinciple,
  // setX,
  // setY,
  // ref,
}) => {
  const [
    firstPrinciple,
    setFirstPrinciple,
  ] = useState(codexTexts);
  const [
    printFirstPrinciple,
    setPrintFirstPrinciple,
  ] = useState("");

  const samurai = useRef("");
  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = firstPrinciple[1].slice(
      0,
      index
    );
    index++;

    setPrintFirstPrinciple(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(firstPrinciple);
  }, []);

  return (
    <div
      className="firstLesson"
      id="codexOne"
    >
      <h1 className="title">
        Righteousness
      </h1>
      {/* <Samurai
        setX={setX}
        setY={setY}
        ref={ref}
      /> */}
      <div className="samuraiIntro">
        {printFirstPrinciple}
      </div>

      <NextBtn
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
    </div>
  );
};

export default PrincipleOne;
