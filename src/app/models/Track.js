const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
  name:  {type : String , required : true},
  title:  {type : String , required : true},
  added_at: {type : String, required: true},
  owner : {type : Schema.Types.ObjectId , ref : 'users'}
});

const Track = mongoose.model('track', TrackSchema)
module.exports = Track

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const BlogPostSchema = new Schema({
//     title: String,
//     content: String,
//     username: String,
//     datePosted: {
//         type: Date,
//         default: new Date()
//     },
//     image: String
// });

// const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
// module.exports = BlogPost