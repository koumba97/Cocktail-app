import express from "express";
import axios, { AxiosResponse } from "axios";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/random", async function (req: any, res: any) {
  axios
    .get("https://thecocktaildb.com/api/json/v1/1/random.php", {
      headers: {
        "Content-Type": "application/json",
        "accept-encoding": null,
      },
    })
    .then((resp: AxiosResponse) => {
      res.send(resp.data);
    })
    .catch(function (error: Error) {
      console.log(error.message);
      res.send(error);
    });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
