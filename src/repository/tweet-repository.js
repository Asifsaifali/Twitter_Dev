const Tweet = require("../models/Tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      throw error;
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      throw error;
    }
  }

  async getWithComment(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "comments" }).lean();
      return tweet;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(id, data, { new: true });
      return tweet;
    } catch (error) {
      throw error;
    }
  }

  async getAll(offset,limit){
    try {
        const tweet = await Tweet.find().skip(offset).limit(limit);
        return tweet;
      } catch (error) {
        throw error;
      }
  }
}

module.exports = TweetRepository;
