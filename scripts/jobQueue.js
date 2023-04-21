const Song = require('../models/Song')
const {downLoadSong} = require('../scripts/downLoadSong')




const jobQueue = async () =>
{   
   
    const job = await Song.findOne({
        where: {status: "unfinished"}
    }
    )
 
   
        await downLoadSong(job)
        
       

        
 


}

jobQueue()
    
    




