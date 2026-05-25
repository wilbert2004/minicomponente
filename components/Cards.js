//importamos la clase Component, que es la clase base de todos los componentes que vamos a crear
import Component from "../core/Component.js";


export default class Cards extends Component {

    render() {
        const card = document.createElement("div");

        //propiedades de la tarjeta
        const title = document.createElement("h2");
        const parrafo = document.createElement("p");
        const button = document.createElement("button");

        //datos asignados en cada tarjeta
        title.innerText = this.props.title;
        parrafo.innerText = this.props.parrafo;
        button.innerText = "ver mas";

        //los datos que tendran nuestro card 
        card.append(
            title,
            parrafo,
            button
        )

        //devolvemos el elemento ya listo 
        return card;
    }
}