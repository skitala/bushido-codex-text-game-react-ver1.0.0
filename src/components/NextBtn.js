import React from "react";

const NextBtn = ({
  moveToNextPrinciple,
}) => {
  const nextLesson = () => {
    moveToNextPrinciple((prevState) => [
      ...prevState,
      "name",
    ]);
  };

  return (
    <button
      onClick={nextLesson}
      className="nextPrinciple"
    >
      Next Principle
    </button>
  );
};

export default NextBtn;
