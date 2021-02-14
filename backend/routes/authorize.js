const router = require('express').Router();
const fetch = require('node-fetch');

// 1. Have your application request authorization; the user logs in and authorizes access
router.route('/login').get((req, res) => {
    res.redirect('https://accounts.spotify.com/authorize?client_id=523cf5625dbe418b93da4442d4b50b4a&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauthorize%2Fcallback&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-modify-private')
});

// 2. Have your application request refresh and access tokens; Spotify returns access and refresh tokens
router.route('/callback').get((req, res) => {
    var request_token_url = 'https://accounts.spotify.com/api/token';
    var code = req.query.code;
    var request_token_body = 'grant_type=authorization_code&code=' + code + '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauthorize%2Fcallback';
    var request_token_headers = {
        Authorization: 'Basic NTIzY2Y1NjI1ZGJlNDE4YjkzZGE0NDQyZDRiNTBiNGE6OGZmNzI0MTRhODVlNDkyMWJiYzg5ZGIyN2Y3YWQwZjc=',
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    var tokenRequest = () => fetch(request_token_url, { method: 'POST', body: request_token_body, headers: request_token_headers })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            var access_token = json.access_token
            res.redirect('http://localhost:3000/playlists?access_token=' + access_token);
        });

    tokenRequest();
});
module.exports = router;