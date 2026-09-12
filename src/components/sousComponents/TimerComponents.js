import ButtonStart from "./startGame.js"
export default function TimeComponent(Timer){
    const TimeComponent = document.createElement('div')
    const Time = document.createElement('p')
    

    Time.textContent = Timer

    TimeComponent.className = 'timeComponents'  
    Time.className = "time"

    TimeComponent.appendChild(Time)
    // StartGame(Time, Timer)
    return {
        Element: TimeComponent,
        TimeElement: Time 
    };
}
export function StartGame(element, params) {

    let timer = setInterval(() => {
         element.textContent= params; 
        params--;

        if (params < 0) {

            clearInterval(timer);
        }
    }, 1000);
}
function endGame(element){
    element.textContent = "Time End : 0"

}