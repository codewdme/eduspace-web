const connectToMongo = require("./dbconnect");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/api/db", require("./routes/fetchfileinfo"));
app.use("/api/db", require("./routes/addfileinfo"));
app.use(express.static("./public"));

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
