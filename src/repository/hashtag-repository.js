import Hashtag from '../models/Hashtag.js'

class HashtagRepository{

    async create(data) {
        try {
          const tag = await Hashtag.create(data);
          return tag;
        } catch (error) {
          throw error;
        }
      }

      async bulkcreate(data){
        try {
            const tweet=await Hashtag.insertMany(data)
            return tweet;
        } catch (error) {
            throw error;
        }
      }  
    
    async destroy(id) {
        try {
          const response = await Hashtag.findByIdAndDelete(id);
          return response;
        } catch (error) {
          throw error;
        }
      }
    
      async get(id) {
        try {
          const tag = await Hashtag.findById(id);
          return tag;
        } catch (error) {
          throw error;
        }
      }

      async findByName(titleList){
        try {
            const response=await Hashtag.find({
                title:titleList,
            })
            return response;
        } catch (error) {
            throw error ;
            console.log(error);
        }
      }
}

export default HashtagRepository;