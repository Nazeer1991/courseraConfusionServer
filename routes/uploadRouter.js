const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const authenticate = require("../authenticate");

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());

uploadRouter.route("/");
