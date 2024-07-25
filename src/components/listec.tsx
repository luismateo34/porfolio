import { useStore } from "@nanostores/react";
import { $show } from "../store/show";
import css from "../images/css-3.png";
import html from "../images/html.png";
import javascript from "../images/java-script.png";
import typescript from "../images/mecanografiado.png";
import react from "../images/react.png";
import express from "../images/Express.png";
import nextjs from "../images/Next.js.png";
import nodejs from "../images/nodejs.png";
import tailwindcss from "../images/Tailwind CSS.png";
import astroJs from "../images/imagastro.png";

const Tecnologias = {
  html: html.src,
  css: css.src,
  javascript: javascript.src,
  typescript: typescript.src,
  react: react.src,
  express: express.src,
  nextjs: nextjs.src,
  nodejs: nodejs.src,
  tailwind: tailwindcss.src,
  astrojs: astroJs.src,
};

export const Listec = () => {
  const show = useStore($show);
  return (
    <>
      {show && (
        <div className="absolute inset-0 min-h-screen  flex flex-col gap-4 pt-2 items-start justify-between bg-gray-900">
          <h3 className=" mx-auto my-2 text-yellow-300 underline">
            Tecnologias dominadas
          </h3>
          <ul className="flex flex-col flex-wrap justify-evenly gap-6 h-4/6 w-full pl-6 text-orange-400/85">
            {Object.entries(Tecnologias).map(([k, v]) => (
              <li className="flex flex-col items-center gap-3">
                <h3 className="mx-auto">{k}</h3>
                <img src={v} alt={`icono de ${k}`} className="object-cover w-8 h-8 mx-auto" />
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-center pb-6 w-full h-max">
            <button
              className=" w-20 h-10 text-yellow-300  bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-400 shadow-lg shadow-cyan-500/50 rounded-lg"
              onClick={() => {
                $show.set(false);
              }}
            >
              cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
