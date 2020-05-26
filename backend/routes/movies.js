const router = require('express').Router();
const Movie = require('../models/movies.model');

router.route('/').get((req, res) => {
    Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const director = req.body.director;
    const runtime = Number(req.body.runtime);
    const release = Number(req.body.release);
    const genre = req.body.genre;
    const media = req.body.media;

    const newMovie = new Movie({
        title,
        director,
        runtime,
        release,
        genre,
        media,
    });

    newMovie.save()
    .then(res.json('Movie added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(movie => res.json('Movie was deleted!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').post((req, res) => {
    Movie.findById(req.params.id)
    .then(movie => {
        movie.title = req.body.title;
        movie.director = req.body.director;
        movie.runtime = Number(req.body.runtime);
        movie.release = Number(req.body.release);
        movie.genre = req.body.genre;
        movie.media = req.body.media;

        movie.save()
        .then(() => res.json('Movie added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
});

module.exports = router;