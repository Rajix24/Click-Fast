import { NotFoundPage } from "../pages/404.js"
import Board from "../pages/Board.js"
import Home from "../pages/Home.js"

export function navigate(path){
    history.pushState({}, "", path)
    return 
}
export function route(){
    const page = window.location.pathname
    console.log(page)
    switch (page) {
        case "/board":
            app.appendChild(Board())
            break;
        case "/config":
            app.appendChild(Config())
            break;
        case '/':
            app.appendChild(Home())
        break;
        default:
            app.appendChild(NotFoundPage())
            break;
    }
}

window.addEventListener("popState", route)
window.addEventListener("load", route)

