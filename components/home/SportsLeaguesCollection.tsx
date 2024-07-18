import League from "./SportsLeague";

export interface leagueProps {
  country: string;
  leagueName: string;
  leagueKey: string;
}

const LeagueCollection = ({
  activeLeague,
  setLeague,
  leagues,
}: {
  activeLeague: string;
  setLeague: (leagueKey: string) => void;
  leagues: leagueProps[]
}) => {
  return (
    <div className="pb-4 border-b px-4">
      <section className="flex gap-x-2 overflow-x-hidden">
        {leagues.map((league, index) => (
          <League
            country={league.country}
            leagueName={league.leagueName}
            key={index}
            cssClass={
              activeLeague === league.leagueKey ? "border-2 border-sky-600" : ""
            }
            setLeague={() => setLeague(league.leagueKey)}
          />
        ))}
      </section>
    </div>
  );
};

export default LeagueCollection;
