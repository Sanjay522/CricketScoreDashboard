import axios from "axios";

const API_URL = "https://cricket-api-free-data.p.rapidapi.com/cricket-teams";
const API_KEY = "47877a4ff7mshc0238ee0d1d788ep1fcd35jsn8f3e2d5caf82";
const API_HOST = "cricket-api-free-data.p.rapidapi.com";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": API_HOST,
  },
});

export const getTeams = async () => {
    const res = await api.get("/cricket-teams")
    return res.data;
  };


  // useEffect(() => {
  //   fetch("http://localhost:5000/teams")
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(err => console.error(err));
  // }, []);