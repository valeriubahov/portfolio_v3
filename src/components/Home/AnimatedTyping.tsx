import { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const TEXTS = ["React", "Javascript", "Node.js", "HTML", "CSS"];

const colors = ["#61DBFB", "#F0DB4F", "#3c873a", "#F06529", "#2965f1"];

export const AnimatedTyping: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <ReactTextTransition
      children={TEXTS[index % TEXTS.length]}
      springConfig={presets.gentle}
      direction="down"
      style={{ color: colors[index % colors.length] }}
      inline
    />
  );
};
