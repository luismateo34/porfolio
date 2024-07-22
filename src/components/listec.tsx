import { useStore } from "@nanostores/react";
import { $show } from "../store/show";

export const Listec = () => {
  const show = useStore($show);
  return (
    <>
      {show && (
        <div className="absolute inset-0 flex flex-col gap-4 pt-2 items-start justify-between bg-gray-900">
	    <h3 className=" mx-auto my-2 text-yellow-300 underline">Tecnologias dominadas</h3>
            <ul className="flex flex-col justify-evenly gap-6 h-5/6 w-full pl-6 text-orange-400/85">
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>typescript</li>
              <li>react</li>
              <li>express</li>
              <li>next js</li>
              <li>astro</li>
              <li>node js</li>
              <li>tailwind css</li>
            </ul>
          <div className="flex flex-row justify-center pb-6 w-screen h-16">
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
