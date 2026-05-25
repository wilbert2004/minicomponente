export default class Component {

    constructor(
        props = {}
    ) {

        this.props =
            props;

    }

    render() {

        throw new Error(

            "render() obligatorio"

        );

    }

}

//esta parte sera nuestro clase decomponente base, de la cual heredaran todos los componentes que creemos, y el metodo render() es obligatorio, ya que es el encargado de devolver el contenido que se va a renderizar en el DOM