import React from "react";
import { Button, Table } from "reactstrap";
import sho from '../show.png';
import hid from '../hide.png'
import Mod from "./Mod";

const Tables= () => {
    const [fulldata, setfulldata] = React.useState([
        {
            "Name": "Prakash",
            "Place": "hnk",
            "Mail": "prak937@gmail.com",
            "Mobile": "934650258",
            "Password": "UHJha2FzaDgyNiU="
        },
        {
            "Name": "Ravi",
            "Place": "wgl",
            "Mail": "ravirekl839@gmai.cmm",
            "Mobile": "648396458",
            "Password": "UmF2aWtpcmFuODQ2QA=="
        },
        {
            "Name": "Aravind",
            "Place": "kzp",
            "Mail": "aravin589@gmail.com",
            "Mobile": "8308925729",
            "Password": "QXJhdmluZDc0OTMm"
        },
        {
            "Name": "Mailk",
            "Place": "mdk",
            "Mail": "mailk@hajk.hdjdk",
            "Mobile": "9375300305",
            "Password": "TWFsaWszODk1JA=="
        }
    ]);

    const [NameIsValid, setNameValid] = React.useState(false)
    const [NameIsInvalid, setNameInvalid] = React.useState(false)

    const [PlaceIsValid, setPlaceValid] = React.useState(false)
    const [PlaceIsInvalid, setPlaceInvalid] = React.useState(false)

    const [MobileIsValid, setMobileValid] = React.useState(false)
    const [MobileIsInvalid, setMobileInvalid] = React.useState(false)

    const [MailIsValid, setMailValid] = React.useState(false)
    const [MailIsInvalid, setMailInValid] = React.useState(false)

    const [PasswordIsValid, setPasswordValid] = React.useState(false)
    const [PasswordIsInvalid, setPasswordInvalid] = React.useState(false)

    const [addData, setaddData] = React.useState({
        Name: "",
        Place: "",
        Mobile: "",
        Mail: "",
        Password: ""
    });

    const handleAdd = (event, ss) => {
        const Value = event.target.value;
        setaddData({ ...addData, [ss]: Value })

        switch (ss) {
            case 'Name':
                if (Value.length >= 3 && Value.length <= 20) {
                    setNameValid(true);
                    setNameInvalid(false)
                } else {
                    setNameInvalid(true)
                    setNameValid(false)
                }
                break;
            case 'Place':
                if (Value.length >= 3 && Value.length <= 20) {
                    setPlaceValid(true);
                    setPlaceInvalid(false)
                } else {
                    setPlaceInvalid(true)
                    setPlaceValid(false)
                }
                break;
            case 'Mobile':
                let rege = new RegExp('[0-9]{10}');
                if (Value.length === 10 && rege.test(Value)) {
                    setMobileValid(true)
                    setMobileInvalid(false)
                } else {
                    setMobileInvalid(true)
                    setMobileValid(false)
                }
                break;
            case 'Mail':
                let regex = new RegExp('[A-Za-z0-9_.]+@[a-zA-Z]+\\.[a-z]{2,3}');
                if (regex.test(Value)) {
                    setMailValid(true)
                    setMailInValid(false)
                } else {
                    setMailInValid(true)
                    setMailValid(false)
                }
                break;
            case 'Password':
                let reg = new RegExp('(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}')
                if (reg.test(Value)) {
                    setPasswordValid(true)
                    setPasswordInvalid(false)
                } else {
                    setPasswordInvalid(true)
                    setPasswordValid(false)
                }
                break;
            default:
                break;
        }
    }

    const add = () => {
        addData.Password = btoa(addData.Password)
        setfulldata((p) => [...p, addData]);
        setaddData({
            Name: "",
            Place: "",
            Mobile: "",
            Mail: "",
            Password: ""
        });
        setNameValid(false)
        setNameValid(false)
        setPlaceValid(false)
        setPlaceInvalid(false)
        setMailValid(false)
        setMailInValid(false)
        setMobileValid(false)
        setMobileInvalid(false)
        setPasswordValid(false)
        setPasswordInvalid(false)
        setMod(false)
    };

    const edit = () => {
        const newrow = {
            Name: addData.Name,
            Place: addData.Place,
            Mobile: addData.Mobile,
            Mail: addData.Mail,
            Password: btoa(addData.Password)
        };
        const newrows = [...fulldata];
        newrows[inde] = newrow
        setfulldata(newrows);
        setNameValid(false)
        setNameValid(false)
        setPlaceValid(false)
        setPlaceInvalid(false)
        setMailValid(false)
        setMailInValid(false)
        setMobileValid(false)
        setMobileInvalid(false)
        setPasswordValid(false)
        setPasswordInvalid(false)
        setMod(false)
    };

    const [h, seth] = React.useState(true)

    const [en, seten] = React.useState('')

    const [k, setk] = React.useState(null)

    const showpass = (a, k) => {
        seten(atob(a))
        setk(k)
        seth(false)
    }

    const delet = (a) => {
        const newfull = [...fulldata];
        newfull.splice(a, 1);
        setfulldata(newfull);
    }

    let [mod, setMod] = React.useState(false)
    let [mode, setMode] = React.useState(null)
    let [inde, setInde] = React.useState(null)

    const openMod = (obj, v, i) => {
        setaddData(obj)
        addData.Password = ''
        setMode(v)
        setMod(true);
        setInde(i)
    }
    const labels = ["Name", "Mail", "Mobile", "Place", "Password"]

    return (<div>

        <div className="container" >
            <div className="jumbotron" style={{ paddingTop: 5, height: 48 }}>
                <Button className="float-end" onClick={() => openMod({}, "Add", null)} > Add </Button>
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
                            Password
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
                                        {h && a.Password}
                                        {h && <img src={sho} alt="show" style={{ width: 25, height: 25, float: "right" }} onClick={() => showpass(a.Password, key)} />}

                                        {!h && k === key && en}
                                        {!h && k === key && <img src={hid} alt="hide" style={{ width: 25, height: 25, float: "right" }} onClick={() => { seth(true) }} />}
                                        {!h && k !== key && a.Password}
                                        {!h && k !== key && <img src={sho} alt="show" style={{ width: 25, height: 25, float: "right" }} onClick={() => showpass(a.Password, key)} />}
                                    </td>
                                    <td>
                                        <Button size="sm" onClick={() => openMod(a, "Edit", key)} >Edit</Button>
                                        <span>  </span>
                                        <Button size="sm" onClick={() => delet(key)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}

                </tbody>
            </Table>
        </div>
        {
            mod && <Mod Open={mod} Close={setMod} Label={labels} handleAdd={handleAdd} Add={add} Edit={edit} AddData={addData} Mode={mode}
                NameIsValid={NameIsValid}
                NameIsInvalid={NameIsInvalid}
                MailIsValid={MailIsValid}
                MailIsInvalid={MailIsInvalid}
                MobileIsValid={MobileIsValid}
                MobileIsInvalid={MobileIsInvalid}
                PlaceIsValid={PlaceIsValid}
                PlaceIsInvalid={PlaceIsInvalid}
                PasswordIsValid={PasswordIsValid}
                PasswordIsInvalid={PasswordIsInvalid}
            />
        }
    </div>
    );
}

export default Tables