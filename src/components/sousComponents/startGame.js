export default function ButtonStart(obj = {class : "name",id : "#id",content : "Button"}, action, element, timer){
    const Button = document.createElement("bottun")
    Button.className = obj.class
    Button.setAttribute("id", obj.id) 
    Button.textContent = obj.content;
    Button.onclick = ()=>{action(element, timer)}
    return Button;
}