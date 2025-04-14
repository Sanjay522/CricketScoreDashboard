import axios from "axios";

const API_BASE_URL = "https://cricbuzz-cricket.p.rapidapi.com";
const API_KEY = "47877a4ff7mshc0238ee0d1d788ep1fcd35jsn8f3e2d5caf82"; 
const API_HOST = "cricbuzz-cricket.p.rapidapi.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": API_HOST,
  },
});

export const getRecentMatches = async () => {
    const res = await api.get("/matches/v1/recent");
    return res.data;
  };
  
  export const getInternationalMatches = async () => {
    const res = await getRecentMatches();
    return extractMatchesByType(res, "International");
  };
  
  export const getLeagueMatches = async () => {
    const res = await getRecentMatches();
    return extractMatchesByType(res, "League");
  };
  
  export const getDomesticMatches = async () => {
    const res = await getRecentMatches();
    return extractMatchesByType(res, "Domestic");
  };
  

  const extractMatchesByType = (data, matchType) => {
    const section = data?.typeMatches?.find(
      (matchSection) => matchSection.matchType === matchType
    );
  
    return (
      section?.seriesMatches?.flatMap(
        (series) => series.seriesAdWrapper?.matches || []
      ) || []
    );
  };