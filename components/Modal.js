import Component from "../core/Component.js";

export default class Modal extends Component {
    render() {
        const modal = document.createElement("div");
        const title = document.createElement("h1");
        const content = document.createElement("p");
        const button = document.createElement("button");

        //datos asignados a cada elemento
        title.innerText = this.props.title || "Mi Modal";
        content.innerText = this.props.content || "Contenido del modal";
        button.innerText = "Cerrar";

        //estructura de nuestro modal
        modal.append(title, content, button);

        //devolvemos el elemento de modal para que el renderer lo pueda renderizar en el DOM
        return modal;
    }
}