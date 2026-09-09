import  Welcome  from "../components/welcome.js";

export default function Home(){
    const div = document.createElement('div');
    div.className = "container"
    const parHome = document.createElement('p');
    parHome.innerText = "wellcome to click fast game"
    div.appendChild(parHome)
    div.appendChild(Welcome())
    return div;
}