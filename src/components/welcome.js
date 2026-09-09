import button from "./button.js"
import { navigate } from "../routes/route.js"
export default function Welcome(){
    const homeCompoments = document.createElement('div')
    homeCompoments.className = "home-conponent"
    homeCompoments.appendChild(button({class: "homeBTN",  id:"homeBTN", content:"jump to board"}, navigate, "/board"))
    return homeCompoments
}