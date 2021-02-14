const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pagerSchema = new Schema({
    href: { type: String, required: true },
    items: { type: Array, required: true },
    limit: { type: Number, required: true },
    next: { type: String, required: true },
    offset: { type: Number, required: true },
    previous: { type: String, required: true },
    total: { type: Number, required: true }
});

const pager = mongoose.model('pager', pagerSchema);

module.exports = pager;