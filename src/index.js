const express= require('express')
const app=express();

const HashtagRepository=require('./repository/hashtag-repository')
const TweetService=require('./services/tweet-service')

const connection=require('./config/database')

const {PORT}=require('./config/serverConfig');

app.listen(PORT,async()=>{
    console.log('Server is Running at PORT',PORT)   
    await connection(); 
    console.log("Mongodb Connected")


    // const repo=new TweetService();
    // const response=await repo.create({content:'My first #New #Tweet of the #first day'})
    // const repo=new HashtagRepository();
    // let response=await repo.find()
    // console.log(response)
  
})