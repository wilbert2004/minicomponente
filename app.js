//probaremos nuestros componentes creando un componente de texto que reciba un texto por props y lo renderice en el DOM
import Text from "./components/Text.js";
//nuestro renderer para renderizar el componente en el DOM
import Renderer from "./core/Renderer.js";
//seleccionamos el elemento del DOM donde vamos a renderizar nuestro componente
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import Image from "./components/Image.js";
import Divider from "./components/Divider.js";
//importamos el componente card
import Card from "./components/Cards.js";
import Navbar from "./components/Navbar.js";
import Avatar from "./components/Avatar.js";
import Modal from "./components/Modal.js";
import ProductCard from "./components/ProductCard.js";
const app = document.getElementById("app");

function renderSection(title, note, component) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    const description = document.createElement("p");

    heading.innerText = title;
    description.innerText = note;

    section.append(
        heading,
        description
    );

    Renderer.render(component, section);
    app.appendChild(section);
}

renderSection(
    "Text",
    "Componente hecho con texto dentro de un elemento p.",
    new Text({
        text: "Hola, soy un componente de texto"
    })
);

renderSection(
    "Button",
    "Componente hecho con button y onclick.",
    new Button({
        label: "Haz click aquí",
        onClick: () => alert("¡Has hecho click en el botón!")
    })
);

renderSection(
    "Input",
    "Componente hecho con input de texto.",
    new Input({
        placeholder: "Ingresa tu nombre"
    })
);

renderSection(
    "Image",
    "Componente hecho con img.",
    new Image({
        src: "src/gym.jpg",
        alt: "Imagen de ejemplo"
    })
);

renderSection(
    "Divider",
    "Componente hecho con hr para separar secciones.",
    new Divider()
);

renderSection(
    "Card",
    "Componente hecho con div, h2, p y button.",
    new Card({
        title: "Framework",
        parrafo: "Card interna"
    })
);

renderSection(
    "Navbar",
    "Componente hecho con nav, h1, ul y li.",
    new Navbar({
        title: "Mi Navbar"
    })
);

renderSection(
    "Avatar",
    "Componente hecho con div, img, h3 y p.",
    new Avatar({
        src: "src/desarrollador.webp",
        name: "Juan Pérez",
        role: "Desarrollador"
    })
);

renderSection(
    "Modal",
    "Componente hecho con una ventana simple en div.",
    new Modal({
        title: "Mi Modal",
        content: "Este es el contenido de mi modal"
    })
);

renderSection(
    "ProductCard",
    "Componente hecho con img, h2, p, strong y button.",
    new ProductCard({
        title: "Producto 1",
        description: "Descripción del producto 1",
        price: "$19.99",
        image: "src/compu.jpg"
    })
);