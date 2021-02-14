const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    href: { type: String, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    uri: { type: String, required: true }
});

const artist = mongoose.model('artist', artistSchema);

module.exports = artist;