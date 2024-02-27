let movies = [
    {
    id: "1",
    title: "Game Night",
    year: "2018",
    genres: ["Action", "Comedy", "Crime"],
    releaseDate: "2018-02-28",
    actors: ["Rachel McAdams", 
            "Jesse Plemons",
            "Jason Bateman",
    ]  },
    {
        id: "2",
        title: "Area X: Annihilation",
        year: "2018",
        genres: ["Adventure", "Romance", "Fanstasy"],
        releaseDate: "2018-02-23",
        actors: ["Rachel McAdams", 
                "Mani ",
                "Jason Bateman",
                "Shivani"
        ]  },

        {
            id: "3",
            title: "Hannah",
            year: "2017",
            genres: ["Action"],
            releaseDate: "2018-02-24",
            actors: [
                "MK", 
                    "JC",
                    "CK",
            ], 
        },
    ];
    console.log(movies[0].title);
    console.log(movies[movies.length-1].title);
    console.log(movies[1].title);
    console.log(movies[0].year)
    console.log(movies[0].actors);
    console.log(movies[0].actors[0]);
    console.log(movies[0].actors[movies[0].actors.length-1]);
    console.log(movies[0].actors[1]);
    console.log(movies[1].actors[1]);
    console.log(movies[2].actors[2]);
    console.log(movies[2].genres);
    console.log(movies[0].genres);
    console.log(movies[0].genres[0]);
    console.log(movies[2].genres[0]);
    console.log(movies[0].genres[movies[0].genres.length-1]);
    console.log(movies[1].genres[0]);
    console.log(movies[2].genres);
    for (let genre of movies[0].genres) {
        console.log(genre);
    }

    for(let movi of movies){
        console.log(movi.year > 2017)
    }

    for (let allMovie of movies) {
        console.log(allMovie.title)
    }
    console.log(movies[0].title ==="Game Night")

   for(let movi of movies){
    for(let actor of movi.actors)
    console.log(actor ,"Actors");
   }

   for(let movi of movies){
    for(let genr of movi.genres)
    console.log(genr ,"GENRES");
   }

   for(let movi of movies){
    if(movi.genres.length > 1)
    console.log(movi.title);
   }

   for(let movi of movies){
    if(movi.actors.length > 1)
    console.log(movi.title)
   }

   for(let movi of movies){
     if(movi.actors.length ===3)
     console.log(movi.title)
   }

   for(let movi of movies){
    if(movi.year ===2018)
    console.log(movi.title)
  }
  let allMovieTitle= [];
  for(let movi of movies){
   allMovieTitle.push(movi.title);
}

let allGeneres = [];
for(let movi of movies){
    for(let genr of movi.genres)
    allGeneres.push(genr);
   }

   let allActors = [];
   for(let movi of movies){
    for(let actors of movi.actors)
    allActors.push(actors)
   }

