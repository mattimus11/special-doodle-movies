$(document).ready(function () {
  console.log("loaded and ready!!");

  let movieList = [
      { title: "Lord of the Rings", rating: 10 },
      { title: "Cloudy with a Chance of Meatballs", rating: 9.5 },
      { title: "The Princess Bride", rating: 9.3 },
      { title: "Ratatouille", rating: 9.1 },
      { title: "How to Train Your Dragon 2", rating: 9.0 }
  ];

  // Function to show list
  function renderMovieList(movies) {
      $('#movieList').empty();
      movies.forEach(movie => {
          $('#movieList').append(`<li class="list-group-item">${movie.title} - Rating: ${movie.rating}/10</li>`);
      });
  }

  // Sort movies
  function sortAndRenderMovies() {
      movieList.sort((a, b) => b.rating - a.rating);
      renderMovieList(movieList);
  }

  // Show and sort
  sortAndRenderMovies();

  // Add Movie
  $('#btnAddMovie').click(function() {
      let movieName = prompt("Enter the movie name:");
      let movieRating = parseFloat(prompt("Enter the movie rating:"));

      if (movieName && !isNaN(movieRating) && movieRating >= 0 && movieRating <= 10) {
          movieList.push({ title: movieName, rating: movieRating });
          sortAndRenderMovies();
      } else {
          alert("Invalid movie name or rating.");
      }
  });

  // Remove Last Movie
  $('#btnRemoveMovie').click(function() {
      movieList.pop();
      sortAndRenderMovies();
  });
});
