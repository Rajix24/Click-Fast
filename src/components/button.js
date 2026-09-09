// import {navigate} from "../routes/route.js"
export default function button (obj = {class : "name",id : "#id",content : "Button"}, action, path)
{
    const BTN = document.createElement('button')
    BTN.className = obj.class
    BTN.setAttribute("id", obj.id) 
    BTN.textContent = obj.content;
    BTN.onclick = ()=>{action(path)}
    return BTN 
}