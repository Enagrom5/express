const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];
const welcome = (req, res) => {
    res.send("Welcome to my favourite movie list");
  };
  
  app.get("/", welcome);

  const getApiMovies = (req,res)=>{
    res.status(200).json(movies)
  }
  app.get("/api/movies",getApiMovies);

const getApiMovieId=(req,res)=>{
    const wantedId = parseInt(req.params.id)
    const movie = movies.find((movie)=>movie.id===wantedId);
    
    if (movie!=null){
        res.status(200).json(movie)
    }
    else{
        res.status(404).send("Cannot find ");
    }
}
  app.get("/api/movies/:id",getApiMovieId);

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });