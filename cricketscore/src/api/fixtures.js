// fixtures.js
import fixtures from "../src/api/fixtures.json";

export default function handler(req, res) {
  res.status(200).json(fixtures);
}
