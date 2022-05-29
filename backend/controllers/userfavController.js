const bookmarks = require('../models/Userfav');
const User =require('../models/userModel') ;
const mongoose = require('mongoose')

exports.getAllFav = async(req, res, next) =>{
    let bookmarked;
    try {
        bookmarked = await bookmarks.find().populate("user");
    }
    catch (err){
        return console.log(err)
    }
    if (!bookmarked) {
        return res.status(404).json({ message: "No history Found" });
      }
      return res.status(200).json({ bookmarked});
}

exports.addBookmark = async (req, res, next) => {
    const { movie_id, user } = req.body;
  
    let existingUser;
    try {
      existingUser = await User.findById(user);
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "Unable TO FInd User By This ID" });
    }
    const newfav = new bookmarks({
      movie_id,
      user
    });
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await newfav.save({ session });
      existingUser.bookmarked.push(newfav);
      await existingUser.save({ session });
      await session.commitTransaction();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err });
    }
  
    return res.status(200).json({newfav });
  };
  
