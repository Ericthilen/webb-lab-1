const gameDetails = document.querySelector("#game-details");

const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

fetch("data/games.json")
  .then((response) => response.json())
  .then((games) => {
    const game = games.find((game) => game.id == gameId);
    if (game) {
      gameDetails.innerHTML = `
        <article class="game-card">
        <img src="${game.image}" alt="${game.title}">

        <div class="game-card-content">
        <h2>${game.title}</h2>
        <p><strong>Utvecklare:</strong> ${game.developer}</p>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>År:</strong> ${game.year}</p>
        <p>${game.description}</p>
        <p><strong>Betyg: ${game.rating}/10</strong></p>
        </div>
        </article>
        `;
    } else {
      gameDetails.textContent = "Spelet kunde inte hittas.";
    }
  })
  .catch((error) => {
    console.error("Kunde inte läsa in spelet", error);
  });
