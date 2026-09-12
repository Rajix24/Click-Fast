import { getDataLocalStorage } from "../";

export default function Config(){

    let gameState = getDataLocalStorage("config")

        const Container = document.createElement("div");
        const GameConfig = document.createElement("div");
        const ResultConfig = document.createElement("div");

        Container.appendChild(GameConfig);
        Container.appendChild(ResultConfig);


        Container.className = "config-container"
        GameConfig.className = "config-component"
        ResultConfig.className = "config-component"

        
        const FormGame = document.createElement("form");
        FormGame.className = "config-form";
        
        GameConfig.appendChild(FormGame)
        
        const Title = document.createElement("h1");
        Title.textContent = "Game Configuration";
        FormGame.appendChild(Title);
        
        // BOARD CONFIG


        const BoardTitle = document.createElement("h2");
        BoardTitle.textContent = "Board Configuration";


        //CONFIG FOR DEFFICILTY:

        const Hardness = document.createElement("select");

        const OptionEasy = document.createElement("option");
        OptionEasy.value = "easy";
        OptionEasy.textContent = "Easy";

        const OptionHard = document.createElement("option");
        OptionHard.value = "hard";
        OptionHard.textContent = "Hard";

        const OptionExtraHard = document.createElement("option");
        OptionExtraHard.value = "extra-hard";
        OptionExtraHard.textContent = "Extra Hard";

        Hardness.appendChild(OptionEasy);
        Hardness.appendChild(OptionHard);
        Hardness.appendChild(OptionExtraHard);
        FormGame.appendChild(Hardness)

        
        
        
        // OPTION FOR BOARDSIZE
        const BoardSize = document.createElement("select");

        const Option9 = document.createElement("option");
        Option9.value = "9";
        Option9.textContent = "9 Boxes";

        const Option12 = document.createElement("option");
        Option12.value = "12";
        Option12.textContent = "12 Boxes";

        const Option16 = document.createElement("option");
        Option16.value = "16";
        Option16.textContent = "16 Boxes";

        BoardSize.appendChild(Option9);
        BoardSize.appendChild(Option12);
        BoardSize.appendChild(Option16);

        FormGame.appendChild(BoardSize);


        // BUTTON FOR FORM
        const SubmitButton = document.createElement("button");

        SubmitButton.type = "submit";
        SubmitButton.textContent = "Start Game";

        FormGame.appendChild(SubmitButton);

        FormGame.addEventListener("submit", (e) => {
            e.preventDefault();
            gameState.boardCounter = Number(BoardSize.value);
            console.log(gameState);
        });




        // RowsInput.type = "number";
        // RowsInput.value = gameState.rows;

        // const ColumnsInput = document.createElement("input");
        // ColumnsInput.type = "number";
        // // ColumnsInput.value = gameState.columns;


        // RowsContainer.appendChild(RowsLabel);
        // RowsContainer.appendChild(RowsInput);

        // ColumnsContainer.appendChild(ColumnsLabel);
        // ColumnsContainer.appendChild(ColumnsInput);

        // BoardComponent.appendChild(BoardTitle);
        // BoardComponent.appendChild(RowsContainer);
        // BoardComponent.appendChild(ColumnsContainer);


        // // ==========================
        // // RESULT CONFIGURATION
        // // ==========================

        // const ResultTitle = document.createElement("h2");
        // ResultTitle.textContent = "Game Configuration";

        // const TimeBoard = document.createElement("div");
        // const ResultBoard = document.createElement("div");

        // // TimeBoard.textContent = `Time: ${gameState.timeLeft}s`;
        // // ResultBoard.textContent = `Points: ${gameState.points}`;

        // ResultComponent.appendChild(ResultTitle);
        // ResultComponent.appendChild(TimeBoard);
        // ResultComponent.appendChild(ResultBoard);


        // // ==========================
        // // BUTTON
        // // ==========================

        // const BtnStartGame = document.createElement("button");

        // BtnStartGame.textContent = "Start Game";

        // StartButton.appendChild(BtnStartGame);

    return Container
}