import { $show } from "../store/show";

export const Tecnologias = () => {
  return (
    <div className=" col-start-1 col-end-6 row-start-4 row-end-5  flex flex-col justify-end items-center lg:hidden  w-screen pb-6">
      <button
        className=" w-36 h-10 text-yellow-300  bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-400 shadow-lg shadow-cyan-500/50 rounded-lg"
        onClick={() => {
          $show.set(true);
        }}
      >
        Tecnologias
      </button>
    </div>
  );
};
