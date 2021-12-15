import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import { Container, Grid, Input, Button, Icon } from "semantic-ui-react";
import styles from '../../static/css/modular.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',

        };
    }

    onSubmit = () => {
        console.log(this.state.url);
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
                        <Row columns={4}>
                            <Column width={2} />
                            <Column width={10} textAlign="center" >
                                <Input placeholder="Input a website here..." fluid onChange={event => this.setState({ url: event.target.value })} />
                            </Column>
                            <Column width={2} textAlign="left">
                                <Button fluid animated='vertical' color='black' size='medium' onClick={this.onSubmit}>
                                    <Button.Content hidden><Icon name='search' /></Button.Content>
                                    <Button.Content visible>Search Title</Button.Content>
                                </Button>
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
                            <Column>
                                <HomePage />
                            </Column>
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