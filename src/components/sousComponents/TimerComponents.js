export default function TimeComponent(){
    const TimeComponent = document.createElement('div')
    const Time = document.createElement('p')
    

    Time.textContent = Timer()

    TimeComponent.className = 'timeComponents'  
    Time.className = "time"

    TimeComponent.appendChild(Time)
    
    return TimeComponent;
}
function Timer (){
    return "00:00"
}