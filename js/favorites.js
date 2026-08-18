const form = document.querySelector("#favorite-form");
const message = document.querySelector("#message");
const savedFavorite = document.querySelector("#saved-favorite");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const game = document.querySelector("#game").value;
    const reason = document.querySelector("#reason").value;

    if (name.length < 2) {
        message.textContent = "Namnet måste vara minst 2 tecken långt.";
    } else if (game === "") {
        message.textContent = "Vänligen välj ett spel.";
    } else if (reason.length < 10) {
        message.textContent = "Anledningen måste vara minst 10 tecken lång.";
    } else {
        localStorage.setItem("favoriteGame", game);
        message.textContent = `${name}, ditt favoritspel är ${game}! `;

        showFavorite();
    }

});

function showFavorite() {
    const favoriteGame = localStorage.getItem("favoriteGame");

    if (favoriteGame) {
        savedFavorite.textContent = `Sparat favoritspel: ${favoriteGame}`;
    }
}

showFavorite();