import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import { Container, Input } from "semantic-ui-react";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <Container>
                <Input placeholder="Input a website here..." />
                <h1>{this.props.name}</h1>
                <HomePage />
            </Container>
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App name="tommy" />, appDiv)

export default App;