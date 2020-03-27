import React, { Component } from "react";
const css = require("../scss/style.scss");

import Header from "./header.jsx";
import Slider from "./Slider.jsx";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider coverage="100" />
            </React.Fragment>
        );
    }
}

export default App;
