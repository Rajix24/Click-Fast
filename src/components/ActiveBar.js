import  ResultComponents  from "./sousComponents/ResultComponent.js"
import TimeComponent from "./sousComponents/TimerComponents.js"

export default function ActiveBar(){
    const bar = document.createElement("div")


    bar.className = "bar"


    bar.appendChild(TimeComponent())
    bar.appendChild(ResultComponents())



    return bar;
}