//importamos el componente base y el renderer para poder crear nuestros componentes y renderizarlos en el DOM
import Component from "../core/Component.js";


export default class Input extends Component {

    render() {
        const input = document.createElement("input");

        input.type = "text";
        input.placeholder = this.props.placeholder || "Escribe algo...";

        //devolvemos el elemento de input para que el renderer lo pueda renderizar en el DOM
        return input;
    }
}