const mongoose=require('mongoose')

const hashtagShema=mongoose.Schema({

    content:{
        type:String
    },

    tweet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }
})

const Hashtag=mongoose.model('Hashtag',hashtagShema)
module.exports=Hashtag;