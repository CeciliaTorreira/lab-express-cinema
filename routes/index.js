const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');
const { response } = require('../app');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//* GET "/movies" => Lista de películas

router.get("/movies", (req, res, next) => {
 Movie.find()
 .then((response) => {
    console.log(response);

    res.render("../views/movies.hbs", {
        allMovies: response
    });
 })

.catch((error)=>{
    next(error);
   })
});

//* GET /movies/:id => Detalles de cada película

router.get("/movies/:id", (req, res, next)=>{
    Movie.findById(req.params.id)
    .then((response) => {
        console.log(response)

        res.render("../views/movie-details.hbs", {
          singleMovie: response

        })
    })
    .catch((error) => {
        next(error)
    })
})



module.exports = router;
