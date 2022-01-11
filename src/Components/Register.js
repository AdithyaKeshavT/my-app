import React from "react"
import regcont from '../Form/regcont'
import { Button, Card, CardBody, CardText, CardTitle, Form, FormGroup, Input, Label } from "reactstrap"
import Main from "./Main"

export default function Register() {
    const [lo, setLo] = React.useState(false);
    return (
        <>
            { !lo &&
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
                                            <FormGroup floating key={key}>
                                                <Input
                                                    id={key.toString}
                                                    name={input.name}
                                                    placeholder=' '
                                                    type={input.type}

                                                />
                                                <Label for={key.toString}>
                                                    {input.label}
                                                </Label>
                                            </FormGroup>
                                        );
                                    })}
                                    <Button style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} onClick={()=>{ setLo(true)}}>Create Account</Button>
                                </Form>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            }
            {
                lo && <Main/>
            }
        </>
    );
}