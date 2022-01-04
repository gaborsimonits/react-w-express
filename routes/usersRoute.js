const express = require('express')
router = express.Router();
usersRoute = require("../controllers/usersControllers")

// we will map the users route to our users controller, this is an address to our proxy
// need to specify in frontend package.json
router.get('/', usersRoute.usersController)

module.exports = router;