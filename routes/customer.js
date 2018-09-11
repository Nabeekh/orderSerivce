const customer = require('../models/customer'); // Import User Model Schema
const config = require('../configuration/database'); // Import database configuration

module.exports = (router) => {
  console.log('This is running');
  router.post('/create', (req, res) => {
    console.log("Running");
    res.json({ succcess: true, message: "Running" });
  });

  return router;
}