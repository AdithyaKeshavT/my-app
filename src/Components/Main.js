import React from "react"
import './Main.css'

import { Button, Card, CardBody, CardText, CardTitle, Form, FormGroup, Input, Label } from "reactstrap"
import Navig from "./Navig"
import Register from "./Register"

export default function Main() {
    const [values, setValues] = React.useState({
        email: '',
        password: ''

    });
    const handle = (e) => {
        e.preventDefault()
        const Name = e.target.getAttribute("name")
        const Value = e.target.value
        const newData = { ...values }
        newData[Name] = Value
        setValues(newData)
    }
    let [pq, setpq] = React.useState(true)
    let [nav, setNav] = React.useState(false)
    let [reg, setReg] = React.useState(false)

    return (
        <div>
            {
                pq &&
                <div className="App">
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center" tag="h3">
                                Login Form
                            </CardTitle>
                            <hr
                                style={{
                                    color: '#000000',
                                    height: 5
                                }}
                            />
                            <CardText>
                                <Form>
                                    <FormGroup floating>
                                        <Input
                                            id="a"
                                            name='email'
                                            placeholder=' '
                                            type='email'
                                            onChange={handle}
                                        />
                                        <Label for="a">
                                            Email
                                        </Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input
                                            id="b"
                                            name='password'
                                            placeholder=' '
                                            type='password'
                                            onChange={handle}
                                        />
                                        <Label for="b">
                                            Password
                                        </Label>
                                    </FormGroup>
                                    <Button
                                        onClick={() => { setpq(false); setNav(true) }}
                                        disabled={values.email.length < 5 && values.password.length < 5}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </CardText>
                            <hr />
                            <div className="text-center">
                                <Button 
                                    onClick={() => { setpq(false); setReg(true) }} 
                                >
                                    Create New Account
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            }
            {
                nav && <Navig Name={values.email} />
            }
            {
                reg && <Register />
            }
        </div>
    );
}
