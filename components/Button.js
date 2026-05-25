//importamos el componente base y el renderer para poder crear nuestros componentes y renderizarlos en el DOM
import Component from "../core/Component.js";

export default class Button extends Component {

    //llamos la funcion render 
    render() {
        //creamos un elemento de boton y le asignamos el contenido que recibimos por props
        const button = document.createElement("button");

        button.innerText = this.props.label;

        button.onclick = this.props.onClick;

        //devolvemos el elemento de boton para que el renderer lo pueda renderizar en el DOM
        return button;
    }
}