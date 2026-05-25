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
const app = document.getElementById("app");

Renderer.render(
    new Text({
        text: "Hola, soy un componente de texto"
    }),
    app
);

Renderer.render(
    new Button({
        label: "Haz click aquí",
        onClick: () => alert("¡Has hecho click en el botón!")
    }),
    app
);
Renderer.render(
    new Divider(),
    app
);

Renderer.render(
    new Input({
        placeholder: "Ingresa tu nombre"
    }),
    app
);

Renderer.render(
    new Divider(),
    app
);

Renderer.render(
    new Image({
        src: "src/gym.jpg",
        alt: "Imagen de ejemplo"
    }),
    app
);

Renderer.render(
    new Divider(),
    app
);


Renderer.render(

    new Card({

        title:
            "Framework",

        parrafo:
            "Card interna"

    }),

    app

);


Renderer.render(
    new Divider(),
    app
);

Renderer.render(

    new Navbar({
        title: "Mi Navbar"
    }),

    app

);
Renderer.render(
    new Divider(),
    app
);

Renderer.render(

    new Avatar({
        src: "src/desarrollador.webp",
        name: "Juan Pérez",
        role: "Desarrollador"
    }),

    app

);
