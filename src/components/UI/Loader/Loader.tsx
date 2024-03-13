// css
import { LoaderType } from "../types";
import "./loader.css";

// component
export default function Loader({
  width = "3rem",
  borderWidth = "2px",
  borderStyle = "solid",
  borderColor = "hsl(0, 0%, 75%)",
  borderRightColor = "hsl(0, 0%, 25%)",
  animationTime = "1s",
}: LoaderType) {
  return (
    <div className="| overlay flex-center">
      <div
        className="spinner"
        style={{
          width,
          border: `${borderWidth} ${borderStyle} ${borderColor}`,
          borderRightColor,
          animation: `l2 ${animationTime} infinite linear`,
        }}
      ></div>
    </div>
  );
}
