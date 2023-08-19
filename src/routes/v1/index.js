import { createTweet } from '../../controller/tweet-controller.js'
import express from 'express'
const router=express.Router();

router.post('/tweets',createTweet)


export default router;