var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
function getById(id) {
    return document.getElementById(id);
}
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllValid) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    game.title = getById("title").value;
    game.price = parseFloat(getById("price").value);
    game.rating = getById("rating").value;
    var isDigitalOnly = getById("online");
    game.isDigitalOnly = isDigitalOnly.checked;
    return game;
}
function displayGame(myGame) {
}
function isAllValid() {
    return true;
}
