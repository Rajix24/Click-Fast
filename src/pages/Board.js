import BoardComponents from "../components/board.js";
import button from "../components/button.js";
import ActiveBar from "../components/ActiveBar.js"; 
export default function Board(BoardCounter = 12){
    let rows = 2;
    let columns = 3;
    if (BoardCounter == 9) {rows = 3};
    if(BoardCounter == 16) {rows = columns = 4} 
    if(BoardCounter == 12) {rows =3 ;  columns = 4} 

    const ActiveContainer = document.createElement("div")
    const container = document.createElement('div')
    const board = document.createElement("div")
    const style = `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr); backgound: red`
    
    
    
    ActiveContainer.className = "active-container"
    board.className = "container board"
    container.style = "padding:30px; display:flex; justify-content:center; align-items: center; flex-direction : column;"
    board.style = style
    
    ActiveContainer.appendChild(board)
    ActiveContainer.appendChild(ActiveBar())
    container.appendChild(ActiveContainer)
    container.appendChild(button({class:"startBtn", id:"startBtn", content: "Start Game"}, StartGame, "funtion btn working "))
    
    for (let i = 0; i < BoardCounter; i++) {
        board.appendChild(BoardComponents()).addEventListener("click", ()=>{
            console.log("hi")
        }) 
    }
    return container;
}
function StartGame(params) {
    console.log(params)
}