const express = require ("express");
const { getAllFav, addBookmark } = require("../controllers/userfavController");
const bookmarkRouter = express.Router();

bookmarkRouter.get('/getfavlist', getAllFav);
bookmarkRouter.post('/postbookmark',addBookmark);

module.exports= bookmarkRouter;