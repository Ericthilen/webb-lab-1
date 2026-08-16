const form = document.querySelector("#favorite-form");
const message = document.querySelector("#message");

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
        message.textContent = `${name}, ditt favoritspel är ${game}! `;
    }

});