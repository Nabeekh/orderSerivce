const customer = require('../models/customer'); // Import User Model Schema
const config = require('../configuration/database'); // Import database configuration

module.exports = (router) => {
  console.log('This is running');

  router.get('/create', (req, res) => {
    res.send({ message: 'Category Saved!' });
    res.json({ succcess: true, message: "Running" });
  });

  return router;
}