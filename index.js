require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
// const API_URL="https://calendarific.com/api/v2/holidays?&api_key=oUMhv2PA26jTVxXJlH0oTXOs7rBoboml&country=CA&year=2019"
const BASE_URL = "https://calendarific.com/api/v2/holidays";
const API_KEY = "oUMhv2PA26jTVxXJlH0oTXOs7rBoboml";

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/vacation", (req, res) => {
  const country = "CA";
  const year = "2024";

  const getHolidays = async () => {
    // try {
    //     const response = await axios.get(
    //         `${BASE_URL}?&api_key=${API_KEY}&country=${country}&year=${year}`
    //       );
    //   } catch (err) {
    //     res.status(404).send("Not Found");
    //   }
  };
  //getHolidays();
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`We are live on port ${PORT} `);
});
