// el renderer es el encargado de renderizar los componentes en el DOM, es decir, es el encargado de convertir el contenido que devuelve el metodo render() de cada componente en elementos del DOM y agregarlos al documento.

export default class Renderer {

    static render(
        component,
        target
    ) {
        const element = component.render();
        target.appendChild(element);
    }
}
