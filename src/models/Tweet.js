const mongoose=require('mongoose')

const TweetSchema=new mongoose.Schema({
    
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        unique:true,
    },
    comments:[
      { 
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
      }
    ]
},{timestamps:true})

const Tweet=mongoose.model('tweet',TweetSchema)
module.exports=Tweet;