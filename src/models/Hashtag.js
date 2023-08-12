const mongoose=require('mongoose')

const hashtagShema=mongoose.Schema({

    title:{
        type:String,
        required:true,
    },

    tweets:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
]
},{timestamps:true})

const Hashtag=mongoose.model('Hashtag',hashtagShema)
module.exports=Hashtag;