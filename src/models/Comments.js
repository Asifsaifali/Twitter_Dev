import mongoose from 'mongoose'

const CommentSchema=new mongoose.Schema({
     
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        unique:true,
    },
},{timestamps:true});

const Comment=mongoose.model('Comment',CommentSchema)
export default Comment;