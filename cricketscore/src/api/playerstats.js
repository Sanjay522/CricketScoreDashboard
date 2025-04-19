import fixtures from "../server/playerstats.json";

export default function handler(req, res) {
  res.status(200).json(playerstats);
}
