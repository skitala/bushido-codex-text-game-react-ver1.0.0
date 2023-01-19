import Game from "./components/Game";
import PrincipleOne from "./components/PrincipleOne";
import {
  useState,
  useRef,
} from "react";
import PrincipleTwo from "./components/PrincipleTwo";
import PrincipleThree from "./components/PrincipleThree";
import PrincipleFour from "./components/PrincipleFour";
import PrincipleFive from "./components/PrincipleFive";
import PrincipleSix from "./components/PrincipleSix";
import PrincipleSeven from "./components/PrincipleSeven";
import PrincipleEight from "./components/PrincipleEight";

function App() {
  const [
    nextPrinciple,
    moveToNextPrinciple,
  ] = useState([]);
  // const [
  //   previousPrinciple,
  //   moveToPreviousPrinciple,
  // ] = useState(false);
  const principlePage = useRef("");

  switch (nextPrinciple.length) {
    case 1: {
      principlePage.current.style.transform =
        "translateY(-100vh)";
      break;
    }
    case 2: {
      principlePage.current.style.transform =
        "translateY(-200vh)";
      break;
    }
    case 3: {
      principlePage.current.style.transform =
        "translateY(-300vh)";
      break;
    }
    case 4: {
      principlePage.current.style.transform =
        "translateY(-400vh)";
      break;
    }
    case 5: {
      principlePage.current.style.transform =
        "translateY(-500vh)";
      break;
    }
    case 6: {
      principlePage.current.style.transform =
        "translateY(-600vh)";
      break;
    }
    case 7: {
      principlePage.current.style.transform =
        "translateY(-700vh)";
      break;
    }
    case 8: {
      principlePage.current.style.transform =
        "translateY(-800vh)";
      break;
    }
  }

  // if (nextPrinciple.length >= 1) {
  //   principlePage.current.style.transform =
  //     "translateY(-100vh)";
  // }
  // if (previousPrinciple) {
  //   principlePage.current.style.transform =
  //     "translateY(0vh)";
  // }
  return (
    <div
      className="App"
      ref={principlePage}
    >
      <Game
        moveToNextPrinciple={
          moveToNextPrinciple
        }
      />
      {nextPrinciple.length >= 1 ? (
        <PrincipleOne
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
      {nextPrinciple.length >= 2 ? (
        <PrincipleTwo
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
      {nextPrinciple.length >= 3 ? (
        <PrincipleThree
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
      {nextPrinciple.length >= 4 ? (
        <PrincipleFour
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
      {nextPrinciple.length >= 5 ? (
        <PrincipleFive
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
      {nextPrinciple.length >= 6 ? (
        <PrincipleSix
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
      {nextPrinciple.length >= 7 ? (
        <PrincipleSeven
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
      {nextPrinciple.length >= 8 ? (
        <PrincipleEight
          moveToNextPrinciple={
            moveToNextPrinciple
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
