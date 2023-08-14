import mongoose from "mongoose"

 const connection=async()=>{
    await mongoose.connect('mongodb://127.0.0.1/twitter_Dev');
}

export default connection;


