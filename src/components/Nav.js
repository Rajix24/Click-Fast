import { renderLink } from "../routes/route.js"
export default function Nav(){
    const Nav = document.createElement("nav")
    renderLink(Nav)
    return Nav;
}