const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    country: { type: String, required: true },
    display_name: { type: String, required: true },
    href: { type: String, required: true },
    id: { type: String, required: true },
    type: { type: String, required: true },
    uri: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;