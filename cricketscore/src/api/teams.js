import fixtures from "../server/teams.json";

export default function handler(req, res) {
  res.status(200).json(teams);
}
