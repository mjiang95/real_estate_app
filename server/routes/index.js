const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async function (req, res, next) {
  try {
    await axios
      .get(`https://api.yelp.com/v3/businesses/search?location=Toronto`, {
        headers: {
          Authorization: `Bearer ${process.env.api_key}`,
        },
      })
      .then((response) => {
        res.json(response.data.businesses);
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  } catch (err) {
    res.status(400).json({ err });
  }
});

router.post("/search", async function (req, res, next) {
  try {
    await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?location=${req.body.location}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.api_key}`,
          },
        }
      )
      .then((response) => {
        res.json(response.data.businesses);
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  } catch (err) {
    res.status(400).json({ err });
  }
});

router.get("/:id", async function (req, res, next) {
  const id = req.params.id;
  try {
    await axios
      .get(`https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.api_key}`,
        },
      })
      .then((response) => {
        res.json(response.data);
      });
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = router;
