const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("content-Type", "text-plain");
    next();
  })
  .get((req, res, next) => {
    res.end("will send all promotions to you!");
  })
  .post((req, res, next) => {
    res.end(
      "will add the promotion: " +
        req.body.name +
        "with details : " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the promotions!");
  });

promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    next();
  })

  .get((req, res, next) => {
    res.end(
      "Will send details of the promo: " + req.params.promoId + " to you!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /promoId");
  })
  .put((req, res, next) => {
    res.write("Updating the promo: " + req.params.promoId);
    res.end(
      "Will update the promo: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting promo: " + req.params.promoId);
  });

module.exports = promoRouter;
