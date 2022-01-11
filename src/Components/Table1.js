import React from 'react'
import { Button, Table } from 'reactstrap'
import Mod from './Mod'
// import { MultiSelect } from "primereact/multiselect";

const Table1 = () => {
    const [fulldata1, setfulldata1] = React.useState([
        {
            "Name1": "Adithya",
            "Gender1": "Male",
            "City1": "Warangal",
            "Language1": ["Telugu", "Hindi", "English"]
        }
    ])
    const [addData1, setaddData1] = React.useState({
        Name1: "",
        Gender1: "",
        City1: "",
        Language1: '',

    })
    const handleAdd1 = (event) => {

        const ame1 = event.target.getAttribute("name");

        const newData1 = { ...addData1 };
        if (ame1 === 'Language1') {
            const Value = Array.from(event.target.selectedOptions, option => option.value)
            newData1[ame1] = Value
            setaddData1(newData1)
        } else {
            const Value = event.target.value;
            newData1[ame1] = Value;
            setaddData1(newData1)
        }

    }

    const add1 = () => {
        setfulldata1([...fulldata1, addData1]);
        setMod(false);
    }

    // const [selectedLanguages, setSelectedLanguages] = React.useState(null);

    // const languages = [
    //     { language: "Telugu" },
    //     { language: "Hindi" },
    //     { language: "English" }
    // ];

    let [mod, setMod] = React.useState(false)

    const openMod = () => {
        setMod(true)
    }

    const labels = ["Name1", "Gender1", "City1", "Language1"]


    return (
        <>
            <div className="container" >
                <div className="jumbotron" style={{ paddingTop: 5, height: 48 }}>
                    <Button
                        className="float-end"
                        onClick={openMod}
                    >
                        Add
                    </Button>
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
                                Gender
                            </th>
                            <th>
                                Current City
                            </th>
                            <th>
                                Languages Known
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {fulldata1.map((a, key) => {
                            return (
                                <tr style={{ textAlign: 'center' }} key={key}>
                                    <td>
                                        {key + 1}
                                    </td>
                                    <td>
                                        {a.Name1}
                                    </td>
                                    <td>
                                        {a.Gender1}
                                    </td>
                                    <td>
                                        {a.City1}
                                    </td>
                                    <td>
                                        {a.Language1.join()}
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </Table >
            </div >
            {
                mod &&
                <Mod
                    Open={mod} 
                    Close={setMod} 
                    Mode="Add" 
                    Label={labels} 
                    handleAdd1={handleAdd1} 
                    add1={add1} 
                />
            }
        </>
    )
}

export default Table1;
