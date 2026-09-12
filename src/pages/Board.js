import { getDataLocalStorage, SaveDataLocalStorage } from "../services/localStorage.js";
let Boxes = [];
let histories = getDataLocalStorage("hitories") || []
export default function Board() {
    const savedGameState = getDataLocalStorage("config");
    let gameState;
    if (savedGameState) {
        gameState = savedGameState;
    } else {
        gameState = {
            timeLeft: 60,
            boardCounter: 9,
            points: 0,
            rows: 3,
            columns: 4,
            isRunning: false,
            timerInterval: null,
            activeBox: null,
            levelHardnes: 800
        };
        SaveDataLocalStorage("config", gameState);
    }

    if (gameState.boardCounter === 9) {
        gameState.rows = 3;
        gameState.columns = 3;

    }

    if (gameState.boardCounter === 16) {
        gameState.rows = 4;
        gameState.columns = 4;
    }
    let style = `    grid-template-columns: repeat(${gameState.columns}, 1fr);
    grid-template-rows: repeat(${gameState.rows}, 1fr);` 

    // MAIN ELEMENTS

    const Container = document.createElement('div')
    const GameComponent = document.createElement('div')
    const StartButton = document.createElement('div')



    Container.appendChild(GameComponent)
    Container.appendChild(StartButton)


    const BoardComponent = document.createElement('div')
    const ResultComponent = document.createElement('div')

    GameComponent.appendChild(BoardComponent)
    GameComponent.appendChild(ResultComponent)

    const TimeBoard = document.createElement("div")
    const Resultboard = document.createElement('div')

    ResultComponent.appendChild(TimeBoard)
    ResultComponent.appendChild(Resultboard)

    // SECTION FOR BUTTON CREATION:
    const BtnStartGame = document.createElement("button")
    BtnStartGame.textContent = "Start Game"
    BtnStartGame.addEventListener("click", ()=>{
        // START GAME
        if(gameState.isRunning == false){
            StartTimer(gameState, TimerPara, BtnStartGame);
            return;
        }
        // STOP GAME
        if(gameState.isRunning == true) {
            histories.push(gameState)
            SaveDataLocalStorage("hitories", histories)
            StopTimer(gameState,TimerPara,BtnStartGame, ResultPara);
            return
        }
    })

    StartButton.appendChild(BtnStartGame)


    // SECTION FOR CREATE TIMER:
    const TimerPara = document.createElement('p')
    TimerPara.textContent = "01:00" 
    TimeBoard.appendChild(TimerPara)

    // SECTION FOR RESULT:

    const ResultPara = document.createElement('p')
    ResultPara.textContent = `Result: ${gameState.points} P`;
    Resultboard.appendChild(ResultPara)




    // CLASS NAMES:

    Container.className = "Container-board"
    GameComponent.className = "Game-board"
    StartButton.className = "Start-board"

    BoardComponent.className = "board-board";
    BoardComponent.style = style
    ResultComponent.className = "result-board";

    TimeBoard.className = "Time-component-smaller"
    Resultboard.className = "result-component-smaller"

    BtnStartGame.className = "BTN-start"

    TimerPara.className = "timer-para"
    ResultPara.className =  "result-para"


    for (let i = 0; i < gameState.boardCounter; i++) {

        const BoxComponent = Box();
        Boxes.push(BoxComponent)
        BoxComponent.addEventListener("click", () => {
           if (BoxComponent == gameState.activeBox) {
            console.log("click on the right components")// THAT IS WORKING
            gameState.points += 100
            ResultPara.textContent =`Score: ${gameState.points}P` ;
           }
        });
        BoardComponent.appendChild(BoxComponent)
    }

    return Container;
}
// CREATION OF THE BOXS:
function Box() {

    const oneBoard = document.createElement("div");
    oneBoard.className = "single-board";
    return oneBoard;
}


// FUNCTION OF TIMER ON 1 MIN:

function StartTimer(gameState, TimerPara, BtnStartGame) {  
   
    gameState.isRunning = true;
    BtnStartGame.textContent = "Stop Game";


    gameState.timerInterval = setInterval(() => {

        gameState.timeLeft--;
        const minutes = Math.floor(gameState.timeLeft / 60);
        const seconds = gameState.timeLeft % 60;
        TimerPara.textContent =`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        console.log("debuge")
        ChangeRandomBox(gameState, Boxes)
       
        if (gameState.timeLeft <= 0) {
            stopColorBox(gameState, Boxes)
            clearInterval(gameState.timerInterval);
            histories.push(gameState)
            SaveDataLocalStorage("hitories", histories)

            gameState.timeLeft = 60
            gameState.timerInterval = null;
            gameState.isRunning = false;
            TimerPara.textContent = "01:00";
            BtnStartGame.textContent = "Replay";
            return;
        }
        
        

    }, 1000);
    return  
}
    
function StopTimer(gameState, TimerPara, BtnStartGame, ResultPara) {
    
    if(gameState.setInterval !== null){
        
        clearInterval(gameState.timerInterval)
        BtnStartGame.textContent = "Replay"
        TimerPara.textContent = "01:00"
        gameState.timerInterval = null
        gameState.timeLeft = 60
        gameState.isRunning = false
        gameState.points = 0;
        
    // Reset UI
        ResultPara.textContent = "Score: 0 P";
        BtnStartGame.textContent = "Start Game";
        return
    }
    return

}

// FUNCTION OF COLORING:


function stopColorBox(gameState){

    if (gameState.activeBox !== null) {
        gameState.activeBox.style = "background: rgb(198, 197, 197);";
        gameState.activeBox = null;
        return
    }
}
// FUNCTION THAT CHANGE THE COLOR OF BOX PARAM (GAMESTATE BOX)  
function ChangeRandomBox(gameState, boxes){
    const randomIndex = Math.floor(
        Math.random() * boxes.length
    );
    const randomBox = boxes[randomIndex];
    gameState.activeBox = randomBox;
    randomBox.style = "background: blue;";
    setTimeout(()=>{
    if(gameState.activeBox !== null) gameState.activeBox.style = "background: rgb(198, 197, 197);";
    }, gameState.levelHardnes)
}