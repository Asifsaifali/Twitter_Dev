import express from "express"
const app=express();
import TweetService from './services/tweet-service.js'

import connection from './config/database.js'
// import { PORT } from './config/serverConfig.js'

app.listen(3000,async()=>{
    console.log('Server is Running 3000 PORT',)   
    await connection(); 
    console.log("Mongodb Connected")


    const repo=new TweetService();
    const response=await repo.create({content:'My Other #Tweet of the #Second day'})
    console.log(response)
    // const repo=new HashtagRepository();
    // let response=await repo.find()
  
})