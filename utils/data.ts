import { leagueProps } from "@/components/home/SportsLeaguesCollection";

const footballLeagues: leagueProps[] = [
  {
    country: "England",
    leagueName: "Premier League",
    leagueKey: "epl",
  },
  {
    country: "Spain",
    leagueKey: "la_liga",
    leagueName: "La Liga",
  },
  {
    country: "Italy",
    leagueKey: "serie_a",
    leagueName: "Serie A",
  },
  {
    country: "Germany",
    leagueKey: "bundesliga",
    leagueName: "BundesLiga",
  },
  {
    country: "France",
    leagueKey: "ligue_one",
    leagueName: "League 1",
  },
];

const basketballLeagues: leagueProps[] = [
  {
    country: "United States",
    leagueKey: "wnba",
    leagueName: "Women NBA",
  },
];

const americanFootballLeagues: leagueProps[] = [
  {
    country: "United States",
    leagueKey: "nfl",
    leagueName: "NFL",
  },
  {
    country: "United States",
    leagueKey: "ncaaf",
    leagueName: "NCAAF",
  },
  {
    country: "Canada",
    leagueKey: "cfl",
    leagueName: "CFL",
  },
];

const boxingLeagues: leagueProps[] = [
  {
    country: "Boxing",
    leagueKey: "boxing",
    leagueName: "Boxing Bouts",
  },
];

const baseballLeagues: leagueProps[] = [
  {
    country: "Baseball",
    leagueKey: "mlb",
    leagueName: "Major League",
  },
  {
    country: "Baseball",
    leagueKey: "milb",
    leagueName: "Minor League",
  },
  {
    country: "Nippon",
    leagueKey: "npb",
    leagueName: "Professional Baseball",
  },
];

const hockeyLeagues: leagueProps[] = [
  {
    country: "United States",
    leagueKey: "nhl",
    leagueName: "NHL",
  },
  {
    country: "Sweden",
    leagueKey: "shl",
    leagueName: "SHL",
  },
];

const cricketLeagues: leagueProps[] = [
  {
    country: "Cricket",
    leagueKey: "the_hundred",
    leagueName: "The Hundred",
  },
  {
    country: "Cricket",
    leagueKey: "t20",
    leagueName: "T20 Blast",
  },
  {
    country: "Cricket",
    leagueKey: "test_matches",
    leagueName: "Intl. Test Matches",
  },
];


export const sportsLeagues = [
  {
    sportName: "Football",
    leagues: footballLeagues,
  },
  {
    sportName: "Basketball",
    leagues: basketballLeagues,
  },
  {
    sportName: "American Football",
    leagues: americanFootballLeagues,
  },
  {
    sportName: "Boxing",
    leagues: boxingLeagues,
  },
  {
    sportName: "Baseball",
    leagues: baseballLeagues,
  },
  {
    sportName: "Hockey",
    leagues: hockeyLeagues,
  },
  {
    sportName: "Cricket",
    leagues: cricketLeagues,
  },
];
