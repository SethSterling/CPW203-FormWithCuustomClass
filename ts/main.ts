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

function addVideoGame() {
    if (isAllValid) {
        let game = getVideoGame();
        displayGame(game);
    }
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
    It cost ${myGame.price}. 
    It ${digitalGame} digital only.`
    
    displayDiv.appendChild(gameInfo);
    }

function isAllValid():boolean{
    //Add code
    return true;
}

