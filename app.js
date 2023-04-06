const express = require("express");
const path = require("path");
const placeController = require("./controller/placeController");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.status(200).render(index);
});

app.get("/search/place", placeController.place);

app.listen(5000, () => {
  console.log("App running on 5000");
});
