const movies = [{
        title: "The Matrix",
        director: "Wachowski Brothers",
        year: 1999,
        rating: 8.7,
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 8.8,
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        rating: 8.6,
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        rating: 9.2,
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 9.0,
    },
    {
        title: "Fight Club",
        director: "David Fincher",
        year: 1999,
        rating: 8.8
    },
];



const firstAfter2000 = movies.find((movie) => movie.year > 2000).title;
console.log(firstAfter2000)


const firstAbove9 = movies.find((movie) => movie.rating > 9).title;
console.log(firstAbove9)

const nolanMovies = movies.filter((movie) => movie.director === "Christopher Nolan");
console.log(nolanMovies)

const before2010 = movies.filter((movie) => movie.year < 2010);
console.log(before2010)

const titles = movies.map((movie) => movie.title);
console.log(titles)

const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(averageRating)

const sortedByYear = movies.sort((a, b) => a.year - b.year);
console.log(sortedByYear)

const sortedByRating = movies.sort((a, b) => b.rating - a.rating);
console.log(sortedByRating)

const allAbove8 = movies.every((movie) => movie.rating > 8);
console.log(allAbove8)

const anyIn1999 = movies.some((movie) => movie.year === 1999);
console.log(anyIn1999)

const allSameDirector = movies.every((movie) => movie.director === movies[0].director);
console.log(allSameDirector)

const anyBelow85 = movies.some((movie) => movie.rating < 8.5);
console.log(anyBelow85)