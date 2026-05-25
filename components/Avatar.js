import Component from "../core/Component.js";

//nuestra funcion con clases 
export default class Avatar extends Component {
    //renderizamos el componente
    render() {
        //crearemos nuestro etiquetas 
        const box = document.createElement("div");
        const image = document.createElement("img");
        const name = document.createElement("h3");
        const description = document.createElement("p");

        //asignamos los valores que recibimos por props a cada una de las etiquetas
        image.src = this.props.src;
        image.width = '100';

        name.innerText = this.props.name;
        description.innerText = this.props.role;

        //creamos un contenedor para nuestro avatar
        box.append(
            image,
            name,
            description
        )

        //devolvimos el contenedor con todo el contenido para que el renderer lo pueda renderizar en el DOM
        return box;


    }
}