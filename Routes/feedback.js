const express = require("express");
const feedback = require("../database");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  feedback.feedback("feed", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete/:email", (req, res) => {
  let Details = req.params.email;
  Details = Details.replace(':', '');
  feedback.feedback("feed", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update/:email", (req, res) => {
  let Details = req.params.email;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  feedback.feedback("feed", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read/:email", (req, res) => {
  const Details = req.params.email;
 feedback. feedback("feed", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;