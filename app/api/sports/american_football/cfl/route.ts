const apiKey = process.env.ODDS_API_KEY as string;
const apiUrl = `https://api.the-odds-api.com/v4/sports/americanfootball_cfl/odds/?apiKey=${apiKey}&regions=eu&markets=h2h,totals`;

export const GET = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error: any) {
    return new Response(JSON.stringify(error.message));
  }
};