import React from "react";
import axios from "axios";
// import Cookies from 'universal-cookie';

import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import "./home.css";

// const cookies = new Cookies();


class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            products: []
        }
    }

    async componentDidMount(){
        const res = await axios.get('/product');
        if ( typeof(res.data) === "string"){
            window.location.assign('/login')
        }
        res.data.sort((a, b) => b.count - a.count);
        this.setState({products : this.state.products = res.data});

    }

    render(){
        const { products } = this.state;
        return(
            <div className="home-page ">
                <Container >
                    <Row className="productContext">
                        {
                            products.map((product) => (
                                <Col sm={6} lg={3} className=" px-md-5 mb-5" key={product._id}>
                                    <Card className="cartProduct border-none" >
                                        <CardImg className="product-img" top src={product.img} alt="Card image cap" />
                                        <CardBody >
                                        <CardTitle>{ product.name }</CardTitle>
                                        <CardText className="text-muted"> { product.price } </CardText>
                                        <form action="/product" method="POST">
                                            <input type="hidden" name="id"  value={product._id}/>
                                            <Button outline color="info"><small> Lượt xem {product.count} </small></Button>
                                        </form>
                                        </CardBody>
                                    </Card>
                                </Col>
                        ))
                        }
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Home;
