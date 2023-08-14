import mongoose from "mongoose";

const hashtagShema=mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true,
    },

    tweets:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
]
},{timestamps:true})

// hashtagShema.pre('save',(next)=>{
//     this.title.toLowerCase();
//     next();
// })

const Hashtag=mongoose.model('Hashtag',hashtagShema)
export default Hashtag;