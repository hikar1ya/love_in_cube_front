import React from 'react';
import './List.css'
import { Container } from '@material-ui/core';
import myimage from './howToOrder1.jpg'

const HowToOrder = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    width: "65%"
}

export default class Basket extends React.Component {

    render() {
        return (
            <Container>
                <div style={HowToOrder}>
                    <img src={myimage} alt='' ></img>
                </div>
            </Container>
        );
    }
}