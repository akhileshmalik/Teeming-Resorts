var mongoose = require("mongoose");

var resortSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   cost: Number,
   address: String,
   // location: String,
   // lat: Number,
   // lng: Number,
   createdAt: { type: Date, default: Date.now },
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Resort", resortSchema);