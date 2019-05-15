import React from "react";
import { Container,  Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import  "./login.css";


class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            text: '0',
            email : '',
            password: ''
        }
    }

    render() {
        const { email, text } = this.state;
        return(
            <div >
                <Container >
                <div className="login-page">
                    <div className="login-form">
                        <form action="/user" method="POST">
                            <FormGroup row>
                                <Label for="clientEmail" sm={3}>Email</Label>
                                <Col sm={9}>
                                    <Input  type="email" name="email" id="clientEmail" placeholder="Input: abc@gmail.com" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="clientPassword" sm={3}>Password</Label>
                                <Col sm={9}>
                                    <Input  type="text" name="password" id="clientPassword" placeholder="Input: 123" />
                                </Col>
                            </FormGroup>
                            <Button color="primary" >Submit</Button>
                        </form>
                    </div>
                </div>
                </Container>
            </div>
        );
    }
    
}

export default Login;