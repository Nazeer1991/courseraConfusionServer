const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text-plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all Leaders to you!");
  })
  .post((req, res, next) => {
    res.end(
      "will add the leader: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operations not supported on /leaders");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the leaders!");
  });
leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    next();
  })
  .get((req, res, next) => {
    res.end("will send details of leader: " + req.params.leaderId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /leaderId");
  })
  .put((req, res, next) => {
    res.write("updating the leader: " + req.params.leaderId);
    res.end(
      "will update the leader: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting leader: " + req.params.leaderId);
  });

module.exports = leaderRouter;
