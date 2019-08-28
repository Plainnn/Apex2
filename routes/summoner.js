const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const TeemoJS = require('teemojs');
let api = TeemoJS(process.env.TRACKER_API_KEY);

var matchDataArray = [];

router.get('/:platform/:name', async (req, res) => {
    try {
        const { platform, name } = req.params;

        var player = await api.get(`${platform}1`, 'summoner.getBySummonerName', name)

        //Make API call to get the match data
        var matches = await api.get(`${platform}1`, 'match.getMatchlist', player.accountId)
        
         //Check for errors and send 404 if errrs are found
        if(matches.length  >0) {
            return res.status(404).json({
                message: 'No summoner found'
            })
        }

        
        //Due to large amount of data, splice entries to keep responses smaller and more manageable 
        var splice = matches.matches.splice(0, 11);
     
        var dataNew = [];

        function delay() {
            return new Promise(resolve => setTimeout(resolve, 300));
          }

          async function delayedLog(item) {
            // notice that we can await a function
            // that returns a promise
            await delay();
                api.get(`${platform}1`, 'match.getMatch', item.gameId)
                .then((data) =>  {
                    dataNew.push(data);
                })
          }

          async function processArray(array) {
            for (const matches of splice) {
              await delayedLog(matches);
            }
            console.log('Done!');
            res.json({
              data: dataNew,
              splice: splice
            })
  
          }
          
          processArray(splice);
    
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            message: error.message
        })
    }

});
module.exports = router;
