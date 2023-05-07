const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

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





module.exports = router;
