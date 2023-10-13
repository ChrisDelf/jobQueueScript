const Song = require('../models/Song')
const {downLoadSong} = require('../scripts/downLoadSong')




const jobQueue = async () =>
{   
    
    const job = await Song.findAll({
        where: {status: "unfinished"}
    }
    )
        if (!job)
    {
        return
    }
    else
    {
        if (Array.isArray(job))
        {
            job.forEach(async (j) =>{
              await downLoadSong(j)
            })

        }
        else {

        // console.log("ONE JOBER EWREWR EW",job)
        await downLoadSong(job)
        }
            
        
    }
        
       

setTimeout(jobQueue, 10000)
        
}

jobQueue()
    




