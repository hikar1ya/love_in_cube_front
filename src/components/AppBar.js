import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import myimage from './logo.png'

const DivComponent = {
  height: '125px',
  verticalAlign: 'center',
  backgroundColor: '#F4C1A2',
  display: 'flex',
  flexDirectiron: 'column'
}

const ButtonMenu = {
  fontFamily: "Snell Roundhand",
  textDecoration: 'none',
  marginTop: '50px',
  color: 'black'
}

const NaneLove = {
  fontFamily: "Snell Roundhand",
  margin: '50px'
}

export default function ProminentAppBar() {

  return (
    <div style={DivComponent}>
       <div>
        <img src={myimage} height="125px"></img>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Typography variant='h4' style={NaneLove} >Love In Cube</Typography>
      </div>
     
      <div style={{ marginLeft: 'auto' }}>
        <Link to="/" style={ButtonMenu}>
          <Button style={ButtonMenu}>Подарки</Button>
        </Link>
        <Link to="/about" style={ButtonMenu}>
          <Button style={ButtonMenu}>О нас</Button>
        </Link>

        <Link to="/how_to_order" style={ButtonMenu}>
          <Button style={ButtonMenu}>Как заказать</Button>
        </Link>  

        <Link to="/basket" style={ButtonMenu} >
        <Button style={ButtonMenu}>Корзина </Button>
        </Link>

      
        
       

  

      </div>
    </div>
  );
}