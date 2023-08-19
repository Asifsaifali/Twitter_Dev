import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req,res) => {
  try {
    console.log(req.body);
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      message: "Successfully created new Tweet",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    res.status(400).json({
      err: error,
      mesaage: "Something went wrong in Tweet Controller",
      data: {},
      success: false,
    });
  }
};
