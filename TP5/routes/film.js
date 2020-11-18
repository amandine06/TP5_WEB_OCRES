const express = require('express');
const { router } = require('../app');

const hostname = "localhost";
const port = 3000;

const app = express();

//ajout de l'API
const apikey = '4228b83c';
const apiurl = 'http://www.omdbapi.com/';

//appel axios
const axios = require('axios');

//create films data
let films = [{
    id: "0",
    film: "Thor"
}];

//GET tous les films
router.get('/', (req,res) => {
    res.status(200).json({films});
})

//GET les id des films
router.get('/:id', (req,res) => {
    const {id} = req.params;
    const film = _.find(films, ["id", id]);
    res.status(200).json({
        message: 'Film ${id} found!',
        film
    });
});

//PUT un film
router.put('/', (req,res) => {
    const {film} = req.body;
    const id = _.uniqueId();
    films.push({film, id});
    res.json({
        message : 'Just added ${id}',
        film: {film, id}
    });
});

//POST
routeur.post('/:id', (req,res) => {
    const {id} = req.params;
    const {film} = req.body;
    const filmToUpdate = _.find(films, ["id", id]);
    filmToUpdate.film = film;
    res.json({
        message: 'Just updated ${id} with ${film}'
    });
});

//DELETE
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    _.remove(films, ["id", id]);
    res.json({
        message: 'Just removed ${id}'
    });
});