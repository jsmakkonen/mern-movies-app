const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    runtime: { type: Number },
    release: { type: Number },
    genre: { type: String },
    media: { type: String }
}, { timestamps: true });

const Movie = mongoose.model('Movie', moviesSchema);

module.exports = Movie;