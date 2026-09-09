
export default function ResultComponents(){
    const ResultComponent = document.createElement('div')
    const ResultPargraphe = document.createElement('p');
    const Pionts = document.createElement('p')



    Pionts.textContent = piontsResult()
    ResultPargraphe.textContent = "Result"

    ResultComponent.appendChild(ResultPargraphe)
    ResultComponent.appendChild(Pionts)


Pionts.className = "pionts"
    ResultComponent.className = 'resultComponents'  
    return ResultComponent;
}
function piontsResult(){
    return "400 P"
}