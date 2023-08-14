import mongoose from "mongoose";

const TweetSchema=new mongoose.Schema({
    
    content:{
        type:String,
        required:true,
    },
     
     hashtag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag'
     }
},{timestamps:true})

const Tweet=mongoose.model('Tweet',TweetSchema)
export default Tweet