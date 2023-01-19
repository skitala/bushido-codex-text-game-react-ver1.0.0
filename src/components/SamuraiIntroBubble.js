import codexTexts from "../data/codexTexts";
import {
  useState,
  useEffect,
  useRef,
} from "react";

const SamuraiIntroBubble = () => {
  const [intro, setIntro] =
    useState(codexTexts);
  const [printIntro, setPrintIntro] =
    useState("");

  const bubble = useRef("");
  let index = 0;
  let speed = 50;
  const introText = (text) => {
    text = intro[0].slice(0, index);
    // let text = intro[0].slice(0, index);
    index++;

    setPrintIntro(
      (prevState) => (prevState, text)
    );

    if (index === text.length) {
      return text;
    }

    setTimeout(introText, speed);
  };

  useEffect(() => {
    introText(intro);
  }, []);

  return (
    <div
      className="samuraiIntro"
      ref={bubble}
    >
      {printIntro}
    </div>
  );
};

export default SamuraiIntroBubble;
