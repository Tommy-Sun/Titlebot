import React, { Component } from "react";
import { Segment, Grid, Icon, Container } from "semantic-ui-react";
import styles from "../../static/css/modular.css";


class Title extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        };
    }
    onClick() {
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                url: this.state.url,    
            }),
        };
    }

    render () {

        const {title, url, id, favIcon, favorited} = this.props
        const { Row, Column } = Grid;
        let starIcon;
        if (favorited) {
            starIcon = <Icon name="star" size="large" onClick={this.onClick} />
        } else {
            starIcon = <Icon name="star outline" size="large" onClick={this.onClick} />
        }

        return (
            <Segment>
                <Grid padded>
                    <Row columns={3} verticalAlign="middle">
                        <Column width={2}>
                            <Container><img src={favIcon} /></Container>
                        </Column>
                        <Column width={12} textAlign="left">
                            <h3>{title}</h3>
                        </Column>
                        <Column width={2}>
                            <Container>{starIcon}</Container>
                        </Column>
                    </Row>
                </Grid>       
            </Segment>);
    }
}


export default Title;