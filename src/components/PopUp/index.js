import { Component } from "react";
import ReactDOM from "react-dom";

//import locally
import "./styles.css";

const popup = document.getElementById("pop-up");
export default class PopUp extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement("div");
    }
    componentDidMount() {
        popup.appendChild(this.element);
    }
    componentWillUnmount() {
        popup.removeChild(this.element);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.element);
    }
}
