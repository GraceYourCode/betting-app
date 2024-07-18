import Button from "./EventButtons";

interface eventProps {
  time: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeWin: number;
  draw?: number;
  awayWin: number;
  overLine?: number;
  over?: number;
  under?: number;
}

const Event: React.FC<eventProps> = ({
  awayTeam,
  awayWin,
  date,
  draw,
  homeTeam,
  homeWin,
  over,
  overLine,
  time,
  under,
}) => {
  return (
    <div className="border-t px-8 grid grid-cols-4 py-4 items-center gap-x-3 text-xs text-center">
      <aside className="col-span-2 flex gap-x-10">
        <section className="flex flex-col">
          <span>{time}</span>
          <span>{date}</span>
        </section>
        <section className="text-left">
          <p>{homeTeam}</p>
          <p>{awayTeam}</p>
        </section>
      </aside>

      <section className="odds">
        <Button value={homeWin} />
        <Button value={draw || "-" } />
        <Button value={awayWin} />
      </section>
      <section className="odds">
        <main>{overLine}</main>
        <Button value={over as number} />
        <Button value={under as number} />
      </section>
    </div>
  );
};

export default Event;
