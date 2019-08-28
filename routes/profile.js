const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router.get('/:platform/:name', async (req, res) => {


    try {

        //Headers Sent with fetch request
        const headers = {
            'X-Riot-Token': process.env.TRACKER_API_KEY
        }

        //Deconstruct variables from the paramaters in the URL
        const { platform, name } = req.params;

        //Send request with headers (API)
        const response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {
            headers
        });

        //Await a response and store in data variable
        const data = await response.json();
        
        //Check for errors and send 404 if errrs are found
        if(data.errors && data.errors.length > 0) {
            return res.status(404).json({
                message: 'No summoner found'
            })
        }

        //Store account id and profile icon
        const accId = data.accountId;

        //Send another request to get more data on user, using the account id obtained in previous fetch
        const resId = await fetch(`https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accId}`, {
            headers
        });

        //Store data from previous fetch
        const dataId = await resId.json();

        //Send a response with that json
        res.json({
            match: dataId,
            main: data
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        })
    }
});

module.exports = router;
