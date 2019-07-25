const AuthController = require('./controllers/AuthController')
const MovieController = require('./controllers/MovieController')
const TheaterController = require('./controllers/TheaterController')
const ShowController = require('./controllers/ShowController')

module.exports = (app) => {

    //Authentication
    app.post('/register',AuthController.register)
    app.post('/login',AuthController.login) 

    //Movies
    app.post('/movies',MovieController.addMovie)
    app.get('/movies/:title',MovieController.getMovie)
    app.get('/movies',MovieController.getAllMovies)

    //Theaters
    app.post('/theaters',TheaterController.addTheater)
    app.get('/theaters/:name',TheaterController.getTheater)
    app.get('/theaters',TheaterController.getAllTheaters)

    //Shows
    app.post('/shows',ShowController.addShow)
}