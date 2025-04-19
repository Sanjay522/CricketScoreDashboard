import fixtures from "../server/pointstable.json";

export default function handler(req, res) {
  res.status(200).json(pointstable);
}
