import Component from "../core/Component.js";

export default class ProductCard extends Component {
    render() {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("h2");
        const parrafo = document.createElement("p");
        const price = document.createElement("strong");
        const button = document.createElement("button");


        image.src = this.props.image || this.props.src;
        image.width = this.props.width || 200;
        title.innerText = this.props.title;
        parrafo.innerText = this.props.description || this.props.parrafo;
        price.innerText = this.props.price || "";
        button.innerText = "comprar";

        card.append(
            image,
            title,
            parrafo,
            price,
            button
        )

        return card;
    }
}