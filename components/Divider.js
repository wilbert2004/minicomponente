import Component from "../core/Component.js";

export default class Divider
    extends Component {

    render() {

        return document.createElement(
            "hr"
        );

    }

}