import Component from "../core/Component.js";

export default class Navbar extends Component {
    render() {
        const nav = document.createElement("nav");
        const title = document.createElement("h1");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");

        //datos asignados a cada elemento
        title.innerText = this.props.title || "Mi Navbar";
        li1.innerText = "Home";
        li2.innerText = "About";
        li3.innerText = "Contact";

        //estructura de nuestro navbar
        ul.append(li1, li2, li3);
        nav.append(title, ul);

        //devolvemos el elemento de nav para que el renderer lo pueda renderizar en el DOM
        return nav;
    }
}