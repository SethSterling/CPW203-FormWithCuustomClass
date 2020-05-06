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
function clearAllErrors() {
    var errSummary = getById("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    clearAllErrors();
    if (isAllValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    else {
        displayRatingLink();
    }
}
function displayRatingLink() {
    var ratingElements = document.querySelectorAll(".rating-error");
    for (var i = 0; i < ratingElements.length; i++) {
        var currElem = ratingElements[i];
        currElem.onclick = goToRatingPage;
    }
}
function goToRatingPage() {
    window.open("http://www.esrb.org/", "_blank");
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
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". \n    It cost $" + myGame.price.toFixed(2) + ". \n    It " + digitalGame + " digital only.";
    displayDiv.appendChild(gameInfo);
}
function getInputId(id) {
    return document.getElementById(id);
}
function isAllValid() {
    var isValid = true;
    var title = getInputId("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required");
    }
    var price = getInputId("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number");
    }
    var rating = getById("rating").value;
    if (rating == "") {
        isValid = false;
        addErrMsgWithCustomClass("You must choose a rating.", "rating-error");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = getById("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function addErrMsgWithCustomClass(errMsg, cssClass) {
    var errSummary = getById("validation-summary");
    var errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
