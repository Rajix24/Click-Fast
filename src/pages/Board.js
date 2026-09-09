import BoardComponents from "../components/board.js";
export default function Board(BoardCounter = 12){
    let rows = 2;
    let columns = 3;
    if (BoardCounter == 9) {rows = 3};
    if(BoardCounter == 16) {rows = columns = 4} 
    if(BoardCounter == 12) {rows =3 ;  columns = 4} 
    const style = `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr); backgound: red`
    const board = document.createElement("div")
    board.className = "container board"
    board.style = style
    for (let i = 0; i < BoardCounter; i++) {
        board.appendChild(BoardComponents()) 
    }
    return board;
}