const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    movie_id:[{
        type:String,
        required:true
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
});
module.exports = mongoose.model("Bookmark", bookmarkSchema);
