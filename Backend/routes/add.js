const express = require("express");
const router = express.Router();
const {addSnippet,addUser,loginUser} = require('../controllers/addSnippet')
const {findSnippet} = require('../controllers/find')
const {updateSnippet} = require('../controllers/update')
const {shareSnippet,generateKey} = require('../controllers/share')

router.route("/add").post(addSnippet);
router.route("/adduser").post(addUser);
router.route("/loginuser").post(loginUser);
router.route("/find").post(findSnippet);
router.route("/update").post(updateSnippet);
router.route("/share/generate").post(generateKey);
router.route("/share").post(shareSnippet);

module.exports = router;