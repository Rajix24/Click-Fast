import Board from "../pages/Board.js"
import Home from "../pages/Home.js"
import { route, navigate } from "../routes/route.js"
export default function Nav(){
    const nav = document.createElement("nav")
    const links = [
    {
        page : "Home",
        link : "/",
        components: Home()
    },
    {
        page: "board",
        link: "/board",
        components: Board()
    }
]
    const listLikes = document.createElement("div")
    for (let i = 0; i < links.length; i++) {
        const link = document.createElement("button")
        link.onclick = navigate(links[i].link)
        console.log(link)
        link.addEventListener("click", route())
        link.innerText = links[i].page
        listLikes.appendChild(link)
    }
    nav.appendChild(listLikes)
    return nav
}