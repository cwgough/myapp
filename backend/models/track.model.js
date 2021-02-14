const mongoose = require('mongoose');
const album = require('./album.model');
const artist = require('./artist.model');

const Schema = mongoose.Schema;

const trackSchema = new Schema({
    href: { type: String, required: true },
    disc_number: { type: Number, required: true },
    duration_ms: { type: Number, required: true },
    explicit: { type: Boolean, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    popularity: { type: Number, required: true },
    track_number: { type: Number, required: true },
    type: { type: String, required: true },
    uri: { type: String, required: true },
    album: { type: Object(album), required: true },
    artist: { type: Array(Object(artist)), required: true }
});

const track = mongoose.model('track', trackSchema);

module.exports = track;