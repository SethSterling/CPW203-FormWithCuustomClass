class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

function getById(id:string){
    return document.getElementById(id);
}


window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");

    addBtn.onclick = addVideoGame;
}

/**
 * Clears all errors
 */
function clearAllErrors() {
    let errSummary = getById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame() {
    clearAllErrors();

    if (isAllValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
    else{
        displayRatingLink();
    }
}

function displayRatingLink() {
    let ratingElements = document.querySelectorAll(".rating-error");
    for (let i = 0; i < ratingElements.length; i++) {
        let currElem = <HTMLElement>ratingElements[i];
        currElem.onclick = goToRatingPage;
        //currElem.innerHTML += "<a target = '_blank' href='https://www.esrb.org/'> Click here for more info<a>";
    }
}

function goToRatingPage(){
    window.open("http://www.esrb.org/", "_blank");
}

/**
 * Gets all game data form the form 
 * and returns it in a VideoGame
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    game.title =  (<HTMLInputElement>getById("title")).value;

    game.price = parseFloat((<HTMLInputElement>getById("price")).value);

    game.rating = (<HTMLSelectElement>getById("rating")).value

    let isDigitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = isDigitalOnly.checked;
    //Return game
    return game;
}

function displayGame(myGame:VideoGame):void{
    //Display video game 
    let displayDiv = getById("display");

    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    displayDiv.appendChild(gameHeading);
    
    let digitalGame = "is not"
    if (myGame.isDigitalOnly) {
        digitalGame = "is"
    }
    else{
        digitalGame = "is not"
    }

    let gameInfo = document.createElement("p");
//    gameInfo.innerText = myGame.title + " has a rating of " +
//                         myGame.rating + ". It cost " + myGame.price +
//                         ". It " + digitalGame + " digital only";

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. 
    It cost $${myGame.price.toFixed(2)}. 
    It ${digitalGame} digital only.`
    
    displayDiv.appendChild(gameInfo);
    }

function getInputId(id:string):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

function isAllValid():boolean{
    let isValid = true;
    let title = getInputId("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required");
    }

    let price = getInputId("price").value;
    let priceValue = parseFloat(price);
    if(price == "" ||  isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number");
    }

    let rating = (<HTMLOptionElement>getById("rating")).value
    if(rating == ""){
        isValid = false;
        addErrMsgWithCustomClass("You must choose a rating.", "rating-error")
    }

    return isValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}

function addErrMsgWithCustomClass(errMsg:string, cssClass:string) {
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}