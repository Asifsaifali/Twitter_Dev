import mongoose from "mongoose";

const TweetSchema=new mongoose.Schema({
    
    content:{
        type:String,
        required:true,
        max:[250,"Tweet cannot be more than 250 character"]
    },
},{timestamps:true})

const Tweet=mongoose.model('Tweet',TweetSchema)
export default Tweet