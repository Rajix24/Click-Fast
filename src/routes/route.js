import NotFoundPage from "../pages/404.js";
import Board from "../pages/Board.js";
import Config from "../pages/Config.js";
import Home from "../pages/Home.js";

const routes = {
    "/": {
        page: "Home",
        link: "/",
        linkLabel: "Home",
        component: Home
    },

    "/board": {
        page: "Board",
        link: "/board",
        linkLabel: "Board",
        component: Board
    },

    "/setting": {
        page: "Setting",
        link: "/setting",
        linkLabel: "Setting",
        component: Config
    }
};

export function renderLink(elementHTML) {

    Object.keys(routes).forEach(route => {

        const link = document.createElement("a");

        const currentRoute = routes[route];

        link.href = route;
        link.textContent = currentRoute.linkLabel;

        elementHTML.appendChild(link);
    });

    registerEventListener(elementHTML);
}
function registerEventListener(elementHTML) {
    elementHTML.addEventListener("click", (e) => {
        e.preventDefault();
        const link = e.target.closest("a");
        if (!link) {
            return;
        }

        navigate(link.pathname);
    });
}
function navigate(path) {
    history.pushState({}, "", path);
    renderContent(path);
}
function renderContent(path) {

    const app = document.getElementById("app");
    const route = routes[path];
    app.innerHTML = "";
    if (!route) {
        app.appendChild(NotFoundPage());
        return;
    }
    app.appendChild(route.component());
}
window.addEventListener("popstate", () => {
    renderContent(window.location.pathname);
});
window.addEventListener('load',  () =>{
    console.log('load page in happening')
    console.log(window.location.pathname)
    renderContent(window.location.pathname);
})
renderContent(window.location.pathname);