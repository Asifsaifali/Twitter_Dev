import { TweetRepository,HashtagRepository} from '../repository/index.js'

class TweetService {
  constructor() {
    this.twitterRepository = new TweetRepository();
    this.hashtagRepository = new  HashtagRepository();
  }

  async create(data) {
    try {
      console.log(data)
      const content = data.content;
      const tags = content.match(/#[a-zA-Z0-9_]+/g)
        .map((tag) => tag.substring(1).toLowerCase());
      const tweet = await this.twitterRepository.create(data);
      let alreadyPresentTags=await this.hashtagRepository.findByName(tags);
      let titleofPresentTags=alreadyPresentTags.map(t=>t.title)
   let newtags=tags.filter(tag=> !titleofPresentTags.includes(tag))
   newtags=newtags.map(tag=>{
    return {title:tag,tweets:[tweet.id]}
   })
   await this.hashtagRepository.bulkcreate(newtags);
     alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
   }); 
      return tweet;
    } catch (error) {
      throw error;
    }
  }
}
export default TweetService;
