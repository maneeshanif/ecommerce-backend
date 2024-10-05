const router = require("express").Router();
const {showUsers,createUsers,allusers} = require("../controllers/userControler");


router.get("/showuser",showUsers);
router.post("/create",createUsers);
router.get("/allusers",allusers);


module.exports = router;