const order = require('../models/order'); // Import User Model Schema
const config = require('../configuration/database'); // Import database configuration

module.exports = (router) => {
  console.log("This is running");

  router.get("/create", (req, res) => {
    res.send({ message: "Order Saved!" });
    res.json({ succcess: true, message: "Running" });
  });

  return router;
}