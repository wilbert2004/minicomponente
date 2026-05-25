//importamos el componente base y el renderer para poder crear nuestros componentes y renderizarlos en el DOM
import Component from "../core/Component.js";

export default class Text extends Component {
    //llamamos la funcion render 
    render() {
        //creamos un elemento de texto y le asignamos el contenido que recibimos por props
        const Text = document.createElement("p");

        //asignamos el contenido que recibimos por props al elemento de texto
        Text.textContent = this.props.text;

        //devolvemos el elemento de texto para que el renderer lo pueda renderizar en el DOM
        return Text;
    }
}