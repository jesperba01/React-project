import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>TESTING react code</h1>)
    }
}

const appDiv = document.getElementsById("app");
render(<App />, appDiv);