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
}

function isAllValid():boolean{
    //Add code
    return true;
}

