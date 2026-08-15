const gameContainer = document.querySelector("#game-container");

fetch("data/games.json")
  .then((response) => response.json())
  .then((games) => {
    games.forEach((game) => {
      gameContainer.innerHTML += `
        <article class="game-card">
        <img src="${game.image}" alt="${game.title}">

        <div class="game-card-content">
        <h2>${game.title}</h2>
        <p>${game.genre}</p>
        <p>${game.description}</p>
        <p><strong>Betyg: ${game.rating}</strong></p>
        </div>
        </article>
         `;
    });
  })
  .catch((error) => {
    console.error("Kunde inte läsa in spelen", error);
  });
