"use client";

import { useEffect, useState } from "react";
import Event from "./Event";
import LeagueCollection from "./home/SportsLeaguesCollection";
import { formatISODate } from "@/utils/functions";
import { sportsLeagues } from "@/utils/data";

const events = [
  "Football",
  "Basketball",
  "American Football",
  "Boxing",
  "Baseball",
  "Hockey",
  "Cricket",
];

const Events = () => {
  const [activeEvent, setActiveEvent] = useState("Football");
  const [activeEventLink, setActiveEventLink] = useState("football");
  const [activeLeague, setActiveLeague] = useState("epl");
  const [oddsData, setOddsData] = useState<any>();

  const setLeague = (leagueKey: string) => setActiveLeague(leagueKey);

  useEffect(() => {
    setActiveLeague(
      sportsLeagues.filter((sport) => sport.sportName === activeEvent)[0]
        .leagues[0].leagueKey
    );
    setActiveEventLink(activeEvent.replace(" ", "_").toLowerCase());
  }, [activeEvent]);

  useEffect(() => {
    setOddsData(undefined);
    const fetchData = async () => {
      console.log("working");
      fetch(`/api/sports/${activeEventLink}/${activeLeague}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const usefulData = data.filter(
            (each: any) => each.bookmakers.length > 0
          );
          setOddsData(
            usefulData.map((each: any) => {
              const bookmakers = each.bookmakers.filter(
                (bookmaker: any) => bookmaker.markets.length > 1
              );
              return { ...each, bookmakers: bookmakers };
            })
          );
          console.log(
            usefulData.map((each: any) => {
              const bookmakers = each.bookmakers.filter(
                (bookmaker: any) => bookmaker.markets.length > 1
              );
              return { ...each, bookmakers: bookmakers };
            })
          );
        });
    };

    fetchData();
  }, [activeLeague, activeEventLink]);

  return (
    <div className="row-span-5 w-[98%] border bg-white mt-4 flex flex-col gap-y-4">
      <nav className="grid grid-cols-8 gap-x-1 pt-8 border-b">
        {events.map((each, index) => (
          <p
            className={`text-[10px] text-center font-mono border-b-sky-600 hover:border-b-2 cursor-pointer pb-3 ${
              activeEvent === each && "border-b-2"
            }`}
            key={index}
            onClick={() => setActiveEvent(each)}
          >
            {each}
          </p>
        ))}
      </nav>
      <LeagueCollection
        activeLeague={activeLeague}
        setLeague={setLeague}
        leagues={
          sportsLeagues.filter((sport) => sport.sportName === activeEvent)[0]
            .leagues
        }
      />
      <header className="px-8 grid grid-cols-4 gap-x-3 text-xs *:text-center text-gray-600 font-mono">
        <span className="col-span-2"></span>
        <section className="grid grid-cols-3">
          <p>1</p>
          <p>X</p>
          <p>2</p>
        </section>
        <section className="grid grid-cols-3">
          <p>Goals</p>
          <p>Over</p>
          <p>Under</p>
        </section>
      </header>
      <section className="">
        {oddsData ? (
          oddsData.map(
            (each: any, index: number) =>
              each.bookmakers.length > 0 && (
                <Event
                  awayTeam={each.away_team}
                  awayWin={
                    each.bookmakers[0].markets[0].outcomes.filter(
                      (outcome: any) => outcome.name === each.away_team
                    )[0].price
                  }
                  date={formatISODate(each.commence_time as string).date}
                  draw={
                    each.bookmakers[0].markets[0].outcomes.filter(
                      (outcome: any) => outcome.name === "Draw"
                    )[0]?.price
                  }
                  homeTeam={each.home_team}
                  homeWin={
                    each.bookmakers[0].markets[0].outcomes.filter(
                      (outcome: any) => outcome.name === each.home_team
                    )[0].price
                  }
                  over={each.bookmakers[0].markets[1]?.outcomes[0].price}
                  overLine={each.bookmakers[0].markets[1]?.outcomes[0].point}
                  time={formatISODate(each.commence_time as string).time}
                  under={each.bookmakers[0].markets[1]?.outcomes[1].price}
                  key={index}
                />
              )
          )
        ) : (
          <div className="font-mono flex-center justify-center h-64 animate-pulse">
            Loading...
          </div>
        )}
      </section>
    </div>
  );
};

export default Events;
