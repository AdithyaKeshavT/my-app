import React, { useState } from "react";
import { Nav, NavItem, NavLink, Form, FormGroup, Input, Label, Button, Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddRow from "../Form/AddRow";

export default function Home() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [fulldata, setfulldata] = React.useState([
        {
            Name: "Prakash",
            Place: "hnk",
            Mail: 'prak937@gmail.com',
            Mobile: "934650258",
        },
        {
            Name: "Ravi",
            Place: "wgl",
            Mail: 'ravirekl839@gmai.cmm',
            Mobile: "648396458",
        },
        {
            Name: "Aravind",
            Place: "kzp",
            Mail: 'aravin589@gmail.com',
            Mobile: "8308925729",
        },
        {
            Name: "Mailk",
            Place: "mdk",
            Mail: 'mailk@hajk.hdjdk',
            Mobile: "9375300305",
        }
    ]);

    const [addData, setaddData] = React.useState({
        Name: "",
        Place: "",
        Mobile: "",
        Mail: ""
    });

    const handleAdd = (event) => {
        event.preventDefault();

        const Name = event.target.getAttribute("Name");
        const Value = event.target.value;

        const newData = { ...addData };
        newData[Name] = Value;

        setaddData(newData);
    }

    const add = (event) => {
        event.preventDefault();

        const newrow = {

            Name: addData.Name,
            Place: addData.Place,
            Mobile: addData.Mobile,
            Mail: addData.Mail,
        };
        
        const newrows = [...fulldata, newrow];
        fulldata.splice(fulldata.length,0,newrow)
        setfulldata(newrows);
        
    };

    const delet = (a) => {
        const newfull = [...fulldata];
         
        newfull.splice(a, 1);
        setfulldata(newfull);
    }

    const [modalIsOpe, setIsOpe] = React.useState(false);
   
    const [inde,setinde]=useState(null)

    const [p,q]=React.useState([]);

    

    function openModa(a,obj) {
        setinde(a)
      
        q(fulldata[a])
        
        
        const cde={
            Name: obj.Name,
            Place: obj.Place,
            Mail: obj.Mail,
            Mobile: obj.Mobile
        }

        seteditData(cde)
        
        setIsOpe(true);
        
    }
    
    

    function closeModa() {
        setIsOpe(false);
        q([])
    }
   

     const [editData, seteditData] = React.useState({
         Name: '',
         Place: '',
         Mobile: '',
         Mail: ''
     });

     const handleEdit = (event) => {
         event.preventDefault();

         const Name = event.target.getAttribute("Name");
        
         const Value = event.target.value;
         
         const newData = { ...editData };
         newData[Name] = Value;
         

         seteditData(newData);
     }

     const edit = (event) => {
         event.preventDefault();

         const newrow = {

             Name: editData.Name,
             Place: editData.Place,
             Mobile: editData.Mobile,
             Mail: editData.Mail,
         };

         const newrows = [...fulldata];
         newrows[inde]=newrow
         
         fulldata.splice(inde,1,newrow)
        
         setfulldata(newrows);
         
     };

    

    return (<div>
        <div>
            <Nav pills tabs >
                <NavItem>
                    <NavLink active href="/Home">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        <div className="container">
            <div className="jumbotron" style={{ paddingTop:5, height: 48 }}>
                <Button className="float-end" onClick={openModal}> Add </Button>
                <Modal isOpen={modalIsOpen} fade={false}>
                    <ModalHeader toggle={closeModal}> Add </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={add}>
                            {AddRow.inputs.map((input, key) => {
                                return (
                                    <FormGroup key={key} floating>
                                        <Input
                                            id="a"
                                            name={input.name}
                                            placeholder=' '
                                            type={input.type}
                                            onChange={handleAdd}
                                        />
                                        <Label for="a">
                                            {input.label}
                                        </Label>
                                    </FormGroup>
                                );
                            })}
                            <Button color="primary" type='submit' onClick={closeModal}> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
            <Table bordered responsive >
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>
                            S.No
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Mail Id
                        </th>
                        <th>
                            Phone No
                        </th>
                        <th>
                            Place
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fulldata.map((a, key) => {
                            
                            return (
                                <tr style={{ textAlign: 'center' }} key={key}>
                                    <td>
                                        {key + 1}
                                    </td>
                                    <td>
                                        {a.Name}
                                    </td>
                                    <td>
                                        {a.Mail}
                                    </td>
                                    <td>
                                        {a.Mobile}
                                    </td>
                                    <td>
                                        {a.Place}
                                    </td>
                                    <td>
                                        
                                        <Button size="sm" onClick={()=>openModa(key,a)} >Edit</Button>
                                        <span>  </span>
                                        <Button size="sm" onClick={()=>delet(key)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                        <Modal isOpen={modalIsOpe}   fade={false}>
                                            <ModalHeader toggle={closeModa}> Edit </ModalHeader>
                                            <ModalBody>
                                                <Form onSubmit={edit}>
                                                    
                                                            <FormGroup floating>
                                                                <Input
                                                                    id="a"
                                                                    name='Name'
                                                                    defaultValue={p.Name}
                                                                    type='text'
                                                                    onChange={handleEdit}
                                                                />
                                                                <Label for="a">
                                                                    Name
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup floating>
                                                                <Input
                                                                    id="b"
                                                                    name='Mail'
                                                                    defaultValue={p.Mail}
                                                                    type='email'
                                                                    onChange={handleEdit}
                                                                />
                                                                <Label for="b">
                                                                    Email Id
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup floating>
                                                                <Input
                                                                    id="c"
                                                                    name='Mobile'
                                                                    defaultValue={p.Mobile}
                                                                    type='tel'
                                                                    onChange={handleEdit}
                                                                />
                                                                <Label for="c">
                                                                    Mobile No
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup floating>
                                                                <Input
                                                                    id="d"
                                                                    name='Place'
                                                                    defaultValue={p.Place}
                                                                    type='text'
                                                                    onChange={handleEdit}
                                                                />
                                                                <Label for="d">
                                                                    Place
                                                                </Label>
                                                            </FormGroup>
                                                       
                                                    <Button color="primary" type='submit' onClick={closeModa}> Submit </Button>
                                                </Form>
                                            </ModalBody>
                                        </Modal>
                </tbody>
            </Table>
        </div>
    </div>
    );
}