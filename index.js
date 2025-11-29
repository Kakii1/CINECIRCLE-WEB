function filterMovies(selectedGenre) {
  const container = document.getElementById("movie-list");
  container.innerHTML = "";

  const filtered = movies.filter(movie => movie.genre.includes(selectedGenre)).slice(0, 3);

  filtered.forEach((movie, index) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <p style="font-weight: bold; font-size: 1rem; margin-bottom: 8px;">Top ${index + 1}</p>
      <img src="${movie.img}" alt="${movie.title}" />
      <p><strong>Genre:</strong> ${movie.genre.join(", ")}</p>
      <p><strong>Year:</strong> ${movie.year}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Rating:</strong> ${movie.rating}</p>
    `;
    container.appendChild(card);
  });
}