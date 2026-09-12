import { getDataLocalStorage, SaveDataLocalStorage } from "../services/localStorage.js";

export default function Config(){

    let gameState = getDataLocalStorage("config")
    let histories = getDataLocalStorage("hitories") || []

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
        SubmitButton.textContent = "Confirm";

        FormGame.appendChild(SubmitButton);

        FormGame.addEventListener("submit", (e) => {
            e.preventDefault();
            gameState.boardCounter = Number(BoardSize.value);
            if(Hardness.value == "easy") gameState.levelHardnes = 300
            if(Hardness.value == "hard") gameState.levelHardnes = 500
            if(Hardness.value == "extra-hard") gameState.levelHardnes = 300
            // console.log(gameState);
            SaveDataLocalStorage("config", gameState)
        });


        // HANDAL SHOWING THE HISTORIES

        histories.forEach((game, index) => {
            const HistoryDiv = document.createElement("div");
            HistoryDiv.classList.add("history-item");

            const GameNumber = document.createElement("h3");

            GameNumber.className = "GameNumber"
            GameNumber.textContent = `Game ${index + 1}`;

            const Status = document.createElement("p");
            Status.className = "statusHistory"

            Status.textContent = `Running: ${game.isRunning}`;

            const Hardness = document.createElement("p");
            Hardness.className = "hardness-history"

            if(game.levelHardnes == 800){
                Hardness.textContent = `Difficulty: Easy`;
            }
            if(game.levelHardnes == 500){
                Hardness.textContent = `Difficulty: hard`;
            }
            if(game.levelHardnes == 300){
                Hardness.textContent = `Difficulty: Extra Hard`;
            }

            const Points = document.createElement("p");
            Points.textContent = `Points: ${game.points}`;
            Points.className = "piont-history"

            const Time = document.createElement("p");
            Time.textContent = `Time Left: ${game.timeLeft}s`;
            Time.className = "time-history"

            HistoryDiv.appendChild(GameNumber);
            HistoryDiv.appendChild(Status);
            HistoryDiv.appendChild(Hardness);
            HistoryDiv.appendChild(Points);
            HistoryDiv.appendChild(Time);

            ResultConfig.appendChild(HistoryDiv);
        });


    return Container
}