import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import './List.css'

const ButtonMenu = {
    fontFamily: "Snell Roundhand",
    textDecoration: 'none',
    marginTop: '50px',
    color: 'black'
}

export default class Basket extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            list: [],
            flag: false,
        };
    }

    componentDidMount() {
        var list_id = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
        console.log(list_id)
        fetch('http://localhost:5000/cart', { method: "POST", body: list_id })
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    loading: false,
                    list: Array.isArray(json) ? json : [],
                });
            });
    }

    getPrice() {
        var sum = 0
        this.state.list.map((gift) => {
            sum += gift.price
        })
        return sum
    }

    delete(id) {
        const array = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
        const list = this.state.list
        const index = array.findIndex(x => x === id)

        if (index !== -1) {
            list.splice(index, 1)
            array.splice(index, 1)
            this.setState({
                list
            })
            localStorage.setItem('basket', JSON.stringify(array))
        }
    }

    render() {
        if (this.state.list.length !== 0) {
            return (
                <Container style={{ display: 'flex' }}>
                    <Box style={{ width: '800px' }}>
                        {this.state.list.map((gift) => (
                            <Card key={gift._id} style={{ flex: '1', display: 'flex', marginTop: '15px' }}>
                                <CardMedia
                                    style={{ width: '150px', height: '150px' }}
                                    image={gift.image}
                                    title="Подарок"
                                />
                                <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                                    <CardContent style={{ flex: '1 0 auto' }}>
                                        <Typography component="h5" variant="h5">
                                            {gift.name}
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle1">
                                            Цена: {gift.price} руб.
                                    </Typography>
                                        <Link to={"/gift/" + gift._id} style={ButtonMenu} >
                                            <Button style={ButtonMenu}>Посмотреть содержимое </Button>
                                        </Link>
                                        <Button onClick={() => this.delete(gift._id)} style={ButtonMenu}>
                                            Удалить из корзины
                                    </Button>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </Box>
                    <Box alignItems="flex-start" flex='1' marginTop="15px" marginLeft="30px">
                        <div style={{ flex: '1' }}>
                            <Typography component="h5" variant="h5">
                                Итого: {this.getPrice()} руб.
                        </Typography>
                            <Link to="/order" style={ButtonMenu} >
                                <Button style={ButtonMenu}>Перейти к оформлению заказа</Button>
                            </Link>
                        </div>
                    </Box>
                </Container>
            );
        }
        else {
            return (
                <Container>
                    <Typography color="textSecondary" variant="subtitle1">
                        Ваша корзина пуста.
                    </Typography>
                </Container>
            )
        }
    }
}

