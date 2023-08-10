const TweetRepository=require('../repository/index')

class TweetService{
        constructor(){
            this.twitterRepository=new TwitterRepository();
        }


    async create(data){
       try {
        const content=data.content;
       const tags=content.match(/#[a-zA-Z0-9_]+/g);
       tags.map(tag=>tag.substring(1));
       const tweet=await this.twitterRepository.create(data)
       return tweet;
    }catch(error){
        throw error;
   }
}

}