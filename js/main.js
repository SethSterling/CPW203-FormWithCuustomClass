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
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    displayDiv.appendChild(gameHeading);
    var digitalGame = "is not";
    if (myGame.isDigitalOnly) {
        digitalGame = "is";
    }
    else {
        digitalGame = "is not";
    }
    var gameInfo = document.createElement("p");
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". \n    It cost " + myGame.price + ". \n    It " + digitalGame + " digital only.";
    displayDiv.appendChild(gameInfo);
}
function isAllValid() {
    return true;
}
