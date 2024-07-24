import img1 from "../images/nextjs/nextjs-page.png";
import img2 from "../images/nextjs/nextjs-page2.png";
import img3 from "../images/nextjs/nextjs-page3.png";
import img4 from "../images/nextjs/nextjs-page-4.png";
import section2 from "./style/section2.module.css";
import { useEffect, useRef, useState } from "react";

const images = {
  "imagen 1 next js": img1.src,
  "imagen 2 next js": img2.src,
  "imagen 3 next js": img3.src,
  "imagen 4 next js": img4.src,
};
const arrImg = Object.entries(images);

export const SliderTwo = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const transformCSS = ref.current?.firstElementChild?.scrollWidth ?? 0;
  const [count, setCount] = useState<number>(0);
  const [style, setStyle] = useState<CSSStyleDeclaration | null>(null);
  const [arr, setArr] = useState<typeof arrImg>(arrImg);

  const TransformValue = () => {
    if (style !== null) {
      const value = Number(
        style.getPropertyValue("--slide-transform").replace("px", ""),
      );
      return value;
    } else return 0;
  };
  const right = () => {
    const value = TransformValue();
    style?.setProperty("--transition", "transform 400ms");
    style?.setProperty("--slide-transform", `${value - transformCSS}px`);
    setCount((prev) => prev + 1);
  };

  const left = () => {
    const value = TransformValue();
    style?.setProperty("--transition", "transform 400ms");
    style?.setProperty("--slide-transform", `${value + transformCSS}px`);
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    const styleCss = globalThis.document.documentElement.style;
    setStyle(styleCss);
  }, []);

  return (
    <div
      className={`bg-transparent  ${section2.contain} w-screen md:w-[50vw] `}
    >
      <div className={`${section2.containimg}`} ref={ref}>
        {arr.map(([k, v]) => {
          return (
            <div className={`${section2.imgconten} rounded-md`} key={k}>
              <img alt={k} className={`${section2.img} rounded-md`} src={v} />
            </div>
          );
        })}
      </div>
      <div className={`${section2.containbutton}`}>
        <button
          className={`${count === 0 ? section2.disable : section2.button} md:w-36`}
          onClick={() => {
            left();
          }}
          disabled={count === 0}
        >
          izquierda
        </button>
        <button
          className={`${count === arrImg.length - 1 ? section2.disable : section2.button} md:w-36 `}
          onClick={() => {
            right();
          }}
          disabled={count === arrImg.length - 1}
        >
          derecha
        </button>
      </div>
    </div>
  );
};
