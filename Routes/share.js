const express = require("express");
const Result = require("../database");
//const Mapping=require("./Operations");
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("Hello World");
});
Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result.Result("share1", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.delete("/Delete:ID", (req, res) => {
  let Details = req.params.ID;
  Result.Result("share1", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
 Router.put("/Update:ID", (req, res) => {
   let Details = req.params.ID;
   let UpdatedDetails = req.body;
   console.log(UpdatedDetails);
   console.log(Details);
  Result. Result("share1", "Update", Details, UpdatedDetails)
        .then((result) => {
      res.send(result);
      console.log(result);
     })
     .catch((err) => {
       res.send(err.message);
    });
 });
Router.get("/Read:ID", (req, res) => {
  let Details=req.params.ID;
 Result. Result("share1", "Read",Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = Router;