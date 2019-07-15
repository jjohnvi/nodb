const express = require("express");
const app = express();
const {
  getQuotes,
  addFave,
  getFave,
  deleteFave,
  likeQuote,
  getAllQuotes,
  addQuote
} = require("./controller/quotes");
const bodyParser = require("body-Parser");

app.use(express.json());
app.use(bodyParser());

///ENDPOINTS///
app.get("/api/quotes/:type", getQuotes);
app.post("/api/favorites/", addFave);
app.get("/api/favorites/", getFave);
app.delete(`/api/favorites/:id`, deleteFave);
app.put("/api/quotes/:id", likeQuote);
app.get("/api/quotes/", getAllQuotes);
app.post("/api/quotes/", addQuote);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
