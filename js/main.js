const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

});

const homeFavorite = document.querySelector("#home-favorite");

if (homeFavorite) {
    const favoriteGame =localStorage.getItem("favoriteGame");

    if (favoriteGame) {
        homeFavorite.textContent = `Ditt sparade favoritspel: ${favoriteGame}`;
    }
}