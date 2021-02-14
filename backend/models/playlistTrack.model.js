const mongoose = require('mongoose');
const User = require('./user.model');
const track = require('./track.model');

const Schema = mongoose.Schema;

const playlistTrackSchema = new Schema({
    added_at: { type: Date, required: true },
    added_by: { type: Object(User), required: true },
    track: { type: Object(track), required: true }
});

const playlistTrack = mongoose.model('playlistTrack', playlistTrackSchema);

module.exports = playlistTrack;