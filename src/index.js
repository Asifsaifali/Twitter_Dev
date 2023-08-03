const express= require('express')
const app=express();

const TweetRepository= require('./repository/twitter-repository')
const Comment=require('./models/Comments')

const connection=require('./config/database')

const PORT=3000;

app.listen(PORT,async()=>{
    console.log('Server is Running at PORT',PORT)   
    await connection(); 
    console.log("Mongodb Connected")

    // const tweeter=await Tweet.find({userEmail:'asif@gmail.com'})
    // // const tweeter=await tweet.findById('64cb80abd042351130693f84')
    // console.log(tweeter)

    const tweetRepo=new TweetRepository();
    const tweet = await tweetRepo.create({content:'New tweet here'})
    const comment=await Comment.create({content:'doing other Comment'})
    tweet.comments.push(comment)
    await tweet.save()
    console.log(tweet);
  
})