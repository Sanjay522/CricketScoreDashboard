// fixtures.js
import fixtures from "../server/matchdetail.json";

export default function handler(req, res) {
  res.status(200).json(matchdetail);
}
