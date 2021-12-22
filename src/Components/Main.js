import React from "react";
import './Main.css'
import content from "../Form/content";
import { Button, Card, CardBody, CardText, CardTitle, Form, FormGroup, Input, Label } from "reactstrap"


export default function Main() {
    return (
        <div className="App">
            <Card>
                <CardBody>
                    <CardTitle className="text-center" tag="h3">
                        Login Form
                    </CardTitle>
                    <hr style={{
                        color: '#000000',
                        height: 5,
                        borderColor: '#000000'
                    }} />
                    <CardText>
                        <Form>
                            {content.inputs.map((input, key) => {
                                return (
                                    <FormGroup floating>
                                        <Input
                                            id="a"
                                            name={input.name}
                                            placeholder=' '
                                            type={input.type}
                                            
                                        />
                                        <Label for="a">
                                            {input.label}
                                        </Label>
                                    </FormGroup>
                                );
                            })}
                            <Button style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} href='/Home'>Submit</Button>
                        </Form>
                    </CardText>
                    <hr />
                    <div className="text-center">
                        <Button href="/register">Create New Account</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
