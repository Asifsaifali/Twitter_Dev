import express from "express"
const app=express();
import Routes from './routes/index.js'
import connection from './config/database.js'
// import bodyParser from "body-parser";
import bodyParser from "body-parser";
import TweetService from "./services/tweet-service.js";

app.use('/api',Routes);
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const PORT=3000

app.listen(PORT,async()=>{
    console.log('Server is Running PORT',PORT)   
    await connection(); 
    console.log("Mongodb Connected")
//   const tweetService=new TweetService();
//   const resp=await tweetService.create({content:"This is #Tweet from tody"})
//   console.log(resp);
})