const Tweet=require('../models/Tweet')

class TweeterRepository{

    async create(data){
        try {
            const tweet=await Tweet.create(data)
            return tweet;
        } catch (error) {
            throw error
        }
    }
     
    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndDelete(id)
            return tweet;
        } catch (error) {
            throw error
        }
    }

    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            throw error
        }
    }

    async update(id,data){
        try {
        const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true})
            return tweet;
        } catch (error) {
            throw error
        }
    }
}

module.exports=TweeterRepository