import React from "react";
import regcont from '../Form/regcont'
import {
    Button, Card, CardBody, CardText, CardTitle, Form, FormGroup, Input, Label
} from "reactstrap"

export default function Register() {
    return (

        <div className="App" style={{ background: 'black' }}>
            <Card>
                <CardBody>
                    <CardTitle className="text-center" tag="h3">
                        Registration Form
                    </CardTitle>
                    <hr style={{
                        color: '#000000',
                        height: 5,
                        borderColor: '#000000'
                    }} />
                    <CardText>
                        <Form>
                            {regcont.inputs.map((input, key) => {
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
                            }} href='/'>Create Account</Button>
                        </Form>
                    </CardText>
                </CardBody>
            </Card>
        </div>

    );
}