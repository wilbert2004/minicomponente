//import
import Component from '../core/Component.js';

export default class Image extends Component {
    render() {
        const img = document.createElement("img");

        img.src = this.props.src;
        img.alt = this.props.alt || "Imagen";
        img.width = this.props.width || 200;
        img.height = this.props.height || 200;
        return img;
    }

}