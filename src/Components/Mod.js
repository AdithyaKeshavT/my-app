import React from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
// import { MultiSelect } from "primereact/multiselect";

const Mod = (a) => {
    // const [selectedLanguages, setSelectedLanguages] = React.useState(null);

    // const languages = [
    //     { language: "Telugu" },
    //     { language: "Hindi" },
    //     { language: "English" }
    // ];
    return (
        <div>
            <Modal isOpen={a.Open} fade={false}>
                <>
                    <ModalHeader toggle={() => { a.Close(false) }}> {a.Mode} </ModalHeader>
                    <ModalBody>
                        <Form >
                            {a.Label[0] === "Name" ?
                                (
                                    <FormGroup row  >
                                        <Label sm={2} for="a">
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="a"
                                                placeholder='Enter name'
                                                type='text'
                                                value={a.AddData["Name"]}
                                                onChange={(e) => a.handleAdd(e, "Name")}
                                                valid={a.NameIsValid}
                                                invalid={a.NameIsInvalid}
                                                autoComplete='off'
                                            />
                                            <FormFeedback  >
                                                Name must be between 3 to 20 characters
                                            </FormFeedback>
                                            <FormFeedback valid  >
                                                ok
                                            </FormFeedback>
                                        </Col>
                                    </FormGroup>
                                ) : (a.Label[0] === "Name1") ?
                                    (
                                        <FormGroup row  >
                                            <Label sm={3} for="a">
                                                Name
                                            </Label>
                                            <Col sm={9}>
                                                <Input
                                                    id="a"
                                                    placeholder='Enter name'
                                                    autoComplete="off"
                                                    onChange={a.handleAdd1}
                                                />
                                            </Col>
                                        </FormGroup>
                                    ) : (<></>)
                            }
                            {a.Label[1] === "Mail" ?
                                (
                                    <FormGroup row >
                                        <Label sm={2} for="b">
                                            Email
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="b"
                                                placeholder='Enter email'
                                                value={a.AddData["Mail"]}
                                                onChange={(e) => a.handleAdd(e, "Mail")}
                                                valid={a.MailIsValid}
                                                invalid={a.MailIsInvalid}
                                                autoComplete='off'
                                            />
                                            <FormFeedback  >
                                                invalid mail id
                                            </FormFeedback>
                                            <FormFeedback valid  >
                                                mail ok
                                            </FormFeedback>
                                        </Col>
                                    </FormGroup>
                                ) : (a.Label[1] === "Gender1") ?
                                    (
                                        <FormGroup row >
                                            <Label sm={3} id='b'>
                                                Gender
                                            </Label>
                                            <Col sm={9} style={{ paddingTop: 8 }}>
                                                <FormGroup check inline>
                                                    <Input
                                                        name="Gender1"
                                                        type="radio"
                                                        value='Male'
                                                        id='b'
                                                        onChange={a.handleAdd1}
                                                    />
                                                    <Label check>
                                                        Male
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Input
                                                        name="Gender1"
                                                        type="radio"
                                                        value='Female'
                                                        id='b'
                                                        onChange={a.handleAdd1}
                                                    />
                                                    <Label check>
                                                        Female
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Input
                                                        name="Gender1"
                                                        type="radio"
                                                        value='Others'
                                                        id='b'
                                                        onChange={a.handleAdd1}
                                                    />
                                                    <Label check>
                                                        Others
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                    ) : (<></>)
                            }
                            {a.Label[2] === "Mobile" ?
                                (<FormGroup row  >
                                    <Label sm={2} for="c">
                                        MobileNo
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            id="c"
                                            placeholder='Enter MobileNo'
                                            value={a.AddData["Mobile"]}
                                            onChange={(e) => a.handleAdd(e, "Mobile")}
                                            valid={a.MobileIsValid}
                                            invalid={a.MobileIsInvalid}
                                            autoComplete='off'
                                        />
                                        <FormFeedback  >
                                            invalid number
                                        </FormFeedback>
                                        <FormFeedback valid  >
                                            okay
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                ) : (a.Label[2] === "City1") ?
                                    (
                                        <FormGroup row>
                                            <Label sm={3} for='c'>
                                                Current City
                                            </Label>
                                            <Col sm={9} >
                                                <select name='City1' className="form-control" onChange={a.handleAdd1} id="c" >
                                                    <option selected disabled hidden>Choose here</option>
                                                    <option value='Hyderabad'>Hyderabad</option>
                                                    <option value='Warangal'>Warangal</option>
                                                    <option value='Khammam'>Khammam</option>
                                                    <option value='Nalgonda'>Nalgonda</option>
                                                </select>
                                            </Col>
                                        </FormGroup>
                                    ) : (<></>)
                            }
                            {a.Label[3] === "Place" ?
                                (
                                    <FormGroup row  >
                                        <Label sm={2} for="d">
                                            Place
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="d"
                                                placeholder='Enter Place'
                                                type='text'
                                                value={a.AddData["Place"]}
                                                onChange={(e) => a.handleAdd(e, "Place")}
                                                valid={a.PlaceIsValid}
                                                invalid={a.PlaceIsInvalid}
                                                autoComplete='off'
                                            />
                                            <FormFeedback  >
                                                Place must be between 3 to 20 characters
                                            </FormFeedback>
                                            <FormFeedback valid  >
                                                Okay
                                            </FormFeedback>
                                        </Col>
                                    </FormGroup>
                                ) : (a.Label[3] === "Language1") ?
                                    (
                                        <FormGroup row>
                                            <Label sm={3} for='d'>
                                                Languages Known
                                            </Label>
                                            <Col sm={9} >
                                                {/* <MultiSelect
                                        value={selectedLanguages}
                                        options={languages}
                                        onChange={(e) => setSelectedLanguages(e.value)}
                                        optionLabel="language"
                                        placeholder="Select Languages known"
                                    /> */}
                                                <select name='Language1' className="form-control" multiple onChange={a.handleAdd1} id="d" >
                                                    <option value='Telugu'>Telugu</option>
                                                    <option value='Hindi'>Hindi</option>
                                                    <option value='English'>English</option>
                                                </select>
                                            </Col>
                                        </FormGroup>
                                    ) : (<></>)
                            }
                            {a.Label[4] === "Password" && a.Mode === "Add" ?
                                (<FormGroup row  >
                                    <Label sm={2} for="e">
                                        Password
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            id="e"
                                            name='Password'
                                            placeholder='Enter Password'
                                            type='password'
                                            value={a.AddData["Password"]}
                                            onChange={(e) => a.handleAdd(e, "Password")}
                                            valid={a.PasswordIsValid}
                                            invalid={a.PasswordIsInvalid}
                                            autoComplete='off'
                                        />
                                        <FormFeedback  >
                                            Password must have a number, special character and length of min 6 and max 20
                                        </FormFeedback>
                                        <FormFeedback valid  >
                                            Okay
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>)
                                :
                                a.Label[4] === "Password" && a.Mode === "Edit" ?
                                (<FormGroup row  >
                                    <Label sm={2} for="e">
                                        Password
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            id="e"
                                            placeholder='Enter Password'
                                            type='password'
                                            defaultValue=""
                                            onChange={(e) => a.handleAdd(e, "Password")}
                                            valid={a.PasswordIsValid}
                                            invalid={a.PasswordIsInvalid}
                                            autoComplete='off'
                                        />
                                        <FormFeedback  >
                                            Password must have a number, special character and length of min 6 and max 20
                                        </FormFeedback>
                                        <FormFeedback valid  >
                                            Okay
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>) 
                                : <></>
                            }

                            {a.Label.length === 5 && a.Mode === "Add" ?
                                (
                                    <Button color="primary"
                                        type='submit'
                                        disabled={
                                            !a.NameIsValid || !a.MailIsValid || !a.MobileIsValid || !a.PlaceIsValid || !a.PasswordIsValid
                                        }
                                        onClick={a.Add}>
                                        Submit
                                    </Button>
                                ) : a.Label.length === 5 && a.Mode === "Edit" ?
                                    <>
                                        <Button color="primary"
                                            type='submit'
                                            disabled={
                                                a.NameIsInvalid || a.MailIsInvalid || a.MobileIsInvalid || a.PlaceIsInvalid || !a.PasswordIsValid
                                            }
                                            onClick={a.Edit}>
                                            Submit
                                        </Button>
                                    </>
                                    : a.Label.length === 4 ? (
                                        <Button color="primary"
                                            type='submit'
                                            onClick={a.add1}>
                                            Submit
                                        </Button>
                                    ) : (<></>)
                            }
                        </Form>
                    </ModalBody>
                </>
            </Modal>
        </div>
    )
}

export default Mod
