const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const Course = new Schema({
 id:{type:Number, required:true},
 title:{type:String, required:true},
 slug:{type:String, required:true},
 authorId:{type:Number, required:true},
 category:{type:String, required:true}
 },{
     timestamps:true
 })
  module.exports= mongoose.model('course', Course)