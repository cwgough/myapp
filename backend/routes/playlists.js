const router = require('express').Router();
const fetch = require('node-fetch');

// 3. Use the access token to access the Spotify Web API; Spotify returns requested data
router.route('/').get((req, res) => {
    var playlists_url = "https://api.spotify.com/v1/me/playlists";
    var token = "Bearer " + req.query.access_token
    var headers = { "Authorization": token }

    var newRequest = () => fetch(playlists_url, { method: 'GET', headers: headers })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            res.json(json);
        });

    newRequest();
});

// Create a playlist from the app! To be continued...
router.route('/create').post((req, res) => {
    var user_id = "" // I need to get this from the href returned from the /playlists call
    // OR initialize a new endpoint /v1/me where user_id is returned as a parameter
    var createplaylist_url = "https://api.spotify.com/v1/users/" + user_id + "/playlists"
    var token = "Bearer" + access_token
    var headers = {
        "Content-Type": "application/json",
        "Authorization": token
    }
    var body = {
        "name": "Your New Playlist!",
        "public": true,
        "collaborative": false,
        "description": "Testing the summer project"
    }
    fetch(createplaylist_url, { method: 'POST', headers: headers, body: body })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            console.log(json);
        });
});

module.exports = router;