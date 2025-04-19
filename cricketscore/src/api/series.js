import fixtures from "../server/series.json";

export default function handler(req, res) {
  res.status(200).json(series);
}
