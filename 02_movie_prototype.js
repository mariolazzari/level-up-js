class Movie {
  constructor(title, director, genre, year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title} is a ${this.genre} film directed by ${this.director}, released in ${this.year}. It has a rating of ${this.rating}.`;
  }
}

const movie1 = new Movie(
  "Inception",
  "Christopher Nolan",
  "Science Fiction",
  2010,
  8.8
);
const movie2 = new Movie(
  "The Godfather",
  "Francis Ford Coppola",
  "Crime",
  1972,
  9.2
);

console.log(movie1.getOverview()); // Inception is a Science Fiction film directed by Christopher Nolan, released in 2010. It has a rating of 8.8.
console.log(movie2.getOverview()); // The Godfather is a Crime film directed by Francis Ford Coppola, released in 1972. It has a rating of 9.2.
