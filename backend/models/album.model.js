const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    album_type: { type: String, required: true },
    href: { type: String, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    release_date: { type: String, required: true },
    release_date_precision: { type: String, required: true },
    type: { type: String, required: true },
    uri: { type: String, required: true }
});

const album = mongoose.model('album', albumSchema);

module.exports = album;