const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port=process.env.PORT || 5001
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log("Connected with Database"))
  .catch((err) => console.log(err));

app.use("/", require('./routes/productsRoutes'));
app.use("/", require('./routes/adminRoute'));

app.get("/", (req, res) => {
  res.send("<h1> backend deployed successfully</h1>");
});

app.listen(port, () =>
  console.log(`Server is up and running at port ${port}`)
);