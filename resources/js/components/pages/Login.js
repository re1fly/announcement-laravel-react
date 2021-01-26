import React from 'react';
import {LoginImg} from "../../assets";
import { Form, Button, Nav } from 'react-bootstrap'

function Login(){
        return (
                <div className="row" style={{ backgroundColor: "black", height: "100%", width: "100%" }}>
                    <div className="col-8">
                        <img src={LoginImg} style={{ height: "100%", width: "100%"}} alt="Responsive Image" />
                    </div>
                    <div className="col-4" >
                            <h4 className="text-center text-light" style={{ marginBottom: "20%", marginTop: "5%"}}>NOTICE BOARD</h4>
                        <div className="text-light ml-5">
                            <h5>Welcome back,</h5>
                            <p>Please Sign in</p>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your email" style={{ width: "80%"}} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder=" Enter your Password" style={{ width: "80%"}} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check className="text-light mb-4" type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                                Login
                            </Button>
                        </Form>
                        </div>
                        <Nav.Link className="text-center mt-5" style={{color : "#F9C900"}} href="/admin/dashboard" >Register</Nav.Link>
                    </div>
                </div>
        );
}

export default Login;
