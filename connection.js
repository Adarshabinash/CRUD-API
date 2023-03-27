const express = require("express");
const mongoose = require("mongoose");

const connection = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://0.0.0.0/ProjectDB");
  const conn = mongoose.connection;

  conn.on("error", (err) => {
    console.log(err);
  });

  conn.on("open", () => {
    console.log("Connected to the database");
  });
};

module.exports = connection;
