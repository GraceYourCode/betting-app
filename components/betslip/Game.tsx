import { CgClose } from "react-icons/cg";

const Game = () => {
  return (
    <div className="flex py-4 border-b">
      <main className="w-4/5 overflow-x-hidden text-left px-3">
        <header className="font-semibold">Home</header>
        <p className="w-[1000px] text-[10px]">Manchester United vs Fulham</p>
        <p className="text-[8px]">1X2</p>
      </main>
      <aside className="flex flex-col items-end gap-y-5">
        <CgClose className="cursor-pointer"/>
        <p className="font-bold">2.40</p>
      </aside>
    </div>
  );
};

export default Game;
