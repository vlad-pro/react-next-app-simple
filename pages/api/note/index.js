import nc from "next-connect";
import notes from "../../../src/data/data";

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes });
  })
  .post();
