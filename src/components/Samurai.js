import {
  useState,
  useRef,
  useEffect,
} from "react";
import samuraiIcon from "../assets/samurai-helmet.png";

const Samurai = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const samurai = useRef("");

  let position = [x, y];

  useEffect(() => {
    setX(460 + "px");
    setY(480 + "px");
  }, [samurai]);

  const moveSamurai = (e) => {
    samurai.current.focus();
    let x = samurai.current.offsetLeft;
    let y = samurai.current.offsetTop;

    switch (e.key) {
      case "w":
        samurai.current.style.top =
          y - 20 + "px";
        setY(y);
        if (y <= 0) {
          setX(x);
          setY(0);
          samurai.current.style.position =
            "fixed";
          samurai.current.style.top = `${y}`;
        }

        break;
      case "s":
        samurai.current.style.top =
          y + 20 + "px";
        setY(y);

        break;
      case "a":
        samurai.current.style.left =
          x - 20 + "px";
        setX(x);
        if (x <= 0) {
          setX(0);
          setY(y);
          samurai.current.style.position =
            "fixed";
          samurai.current.style.left = `${x}`;
        }

        break;
      case "d":
        samurai.current.style.left =
          x + 20 + "px";
        setX(x);

        break;
    }

    console.log(position);
  };

  return (
    <div
      className="samurai"
      ref={samurai}
      onKeyDown={moveSamurai}
      tabIndex={1}
      style={{
        display: "flex",
        width: "120px",
        height: "120px",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: `${x}`,
        top: `${y}`,
        borderRadius: "50%",
      }}
    >
      <img
        src={samuraiIcon}
        alt=""
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
        }}
      />
    </div>
  );
};

export default Samurai;
