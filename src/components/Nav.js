import { renderLink } from "../routes/route.js"
export default function Nav(){
    const Nav = document.createElement("nav")
    Nav.className = "nav-bar"
    renderLink(Nav)
    return Nav;
}