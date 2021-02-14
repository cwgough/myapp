const mongoose = require('mongoose');
const User = require('./user.model');
const track = require('./track.model');
const tracks = require('./track.model');
const pager = require('./pager.model');
const playlistTrack = require('./playlistTrack.model');

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    href: { type: String, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    public: true,
    snapshot_id: { type: String, required: true },
    type: { type: String, required: true },
    uri: { type: String, required: true },
    owner: { type: Object(User), required: true },
    tracks: { type: Object(pager(playlistTrack)), required: true }
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;