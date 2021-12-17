import React, { Component } from "react";
import { render } from "react-dom";
import TitleGroup from "./title_group";
import { Container, Grid, Input, Button, Icon } from "semantic-ui-react";
import styles from '../../static/css/modular.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
            url: '',
            allData: [],
            favData: [],
        };
    }
    componentDidMount() {
        this.getData();
    }

    getData() {
        const requestOptions = {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        };
        fetch("/api", requestOptions)
            .then((response) => (response.json()))
            .then((data) => this.setState({ allData: data }))
            .then(() => console.log("New Data: ", this.state.allData))
            .then(() => this.getFavoritedData())
            .then(() => console.log("New Fav Data: ", this.state.favData));
    }
    
    getFavoritedData() {
        let newFavData = []
        for (const datapoint of this.state.allData) {
            if (datapoint.favorited) {
                newFavData.push(datapoint);
            }
        } 
        this.setState({ favData: newFavData });
    }

    onSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                url: this.state.url,    
            }),
        };
        fetch("/api/create-title", requestOptions)
            .then((response) => (response.json()))
            .then((data) => console.log(data))
            .then(() => this.getData());
        
        this.setState({ url: '' });
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
                            <Column width={9} textAlign="center" >
                                <Input placeholder="Input a website here..." fluid value={this.state.url} onSubmit={this.onSubmit} onChange={event => this.setState({ url: event.target.value })} />
                            </Column>
                            <Column width={3} textAlign="left">
                                <Button fluid animated='vertical' color='black' size='medium' onClick={this.onSubmit}>
                                    <Button.Content hidden><Icon name='search' /></Button.Content>
                                    <Button.Content visible>Search Title</Button.Content>
                                </Button>
                            </Column>
                            <Column width={2} />
                        </Row>
                        <Row columns={2}>
                            <Column textAlign="center">
                                <h2>Total History:</h2>
                            </Column>
                            <Column textAlign="center">
                                <h2>Favorites:</h2>
                            </Column>
                        </Row>
                        <Row columns={2} divided>
                            <Column textAlign="center">
                                <Row>
                                    <TitleGroup data={this.state.allData} onGetNewData={this.getData} />
                                </Row>
                            </Column>
                            <Column>
                                <Row>
                                    <TitleGroup data={this.state.favData} onGetNewData={this.getData} />
                                </Row>
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