const Song = require('../models/Song')
const {downLoadSong} = require('../scripts/downLoadSong')
const io = require('socket.io-client');
require("dotenv").config();

const socket = io(process.env.API_ADDRESS)
const jobQueue = async () =>
{   
socket.on("connect", () => {
      console.log("Connected to socket");
    });
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
        {   socket.on("unfinished-jobs",() => {
            console.log("update jobs")
            socket.emit("unfinished-jobs")})
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
    




