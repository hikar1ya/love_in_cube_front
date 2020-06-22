import React from 'react';
import './List.css'
import { Container } from '@material-ui/core';
/*import myimage from './howToOrder1.jpg'*/
import myimage from './photo1.jpg' 

const AboutInf = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    width: "100%"
  }

  const TextAbout = {
    fontFamily: "Arial Narrow, sans-serif",
    fontSize: "26px",
    fontStretch: "ultra-condensed",
    fontWeight: "500",
    marginLeft: "50px",
  }

export default class Basket extends React.Component {

    render() {
        return (
            <Container>
                <div>
                    <img src={myimage} alt='' style={AboutInf}></img>
                </div>
                <div style={TextAbout}>
                    <p>Что нужно ценить прежде всего?</p>
                    <p>Любовь.</p>
                    <p>Мы ценим вашу любовь к близким людям. Поэтому с заботой приготовили для вас маленькие выражения этого прекрасного чувства.</p>
                    <p>Будем знакомы!</p>
                    <p>Мы - мастерская подарка Love In Cube, или Love³ по-научному. Ведь правильно выразить любовь - тоже наука.</p>
                </div>
            </Container>
        );
    }
}
