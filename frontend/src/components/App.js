import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import { Container, Grid, Input } from "semantic-ui-react";
import styles from '../../static/css/modular.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    
    render()
    {
        const { Row, Column } = Grid;

        return (
            <Container fluid>
                <Container className={styles.content} fluid>
                    <Grid padded>
                        <Row>
                            <Column textAlign="center">
                                <h1>Title Bot</h1>
                            </Column>
                        </Row>
                        <Row columns={3}>
                            <Column width={2} />
                            <Column width={12} textAlign="center" >
                                <Input placeholder="Input a website here..." fluid />
                            </Column>
                            <Column width={2} />
                        </Row>
                        <Row columns={2} divided>
                            <Column>
                                <Row>
                                    <HomePage />
                                </Row>
                                <Row>
                                    <HomePage />
                                </Row>
                            </Column>
                            <Column></Column>
                        </Row>
                    </Grid>
                </Container>              
                <Container fluid textAlign="center" className={styles.footer1}><div>Designed by Thomas Kebschull</div></Container>
                <Container fluid textAlign="center" className={styles.footer2} />
            </Container>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)

export default App;