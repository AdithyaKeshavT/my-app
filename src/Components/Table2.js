import React, { useState } from 'react'
import { Button, Input, Table } from 'reactstrap';
import { Dropdown } from 'primereact/dropdown';



const Table2 = () => {
    const [data, setData] = useState([
        {
            name: "Prakash",
            city: "Istanbul",
            mobile: 9374839945
        }
    ]);
    const [a, setA] = useState(false);
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [mobile, setMobile] = useState('')

    const cities = [
        { label: 'New York', value: 'New York' },
        { label: 'Rome', value: 'Rome' },
        { label: 'London', value: 'London' },
        { label: 'Istanbul', value: 'Istanbul' },
        { label: 'Paris', value: 'Paris' }
    ]

    const add = () => {
        const newRow = {
            name: name,
            city: city,
            mobile: mobile
        }
        setData([...data, newRow]) 
        setName("")
        setCity('')
        setMobile('')
        setA(false)
    }

    const [ind, setind] = useState(null)
    const edit = (obj, index) => {

        setName(obj.name)
        setCity(obj.city)
        setMobile(obj.mobile)
        setind(index)
    }
    const completeEdit = () => {
        const editedRow = {
            name: name,
            city: city,
            mobile: mobile
        }
        const editedRows = [...data]
        editedRows[ind] = editedRow
        setData(editedRows)
        setind(null)
    }
    const del = (key) => {
        const fulldata = [...data]
        fulldata.splice(key, 1)
        setData(fulldata)
    }
    return (
        <div className='container'>
            <div className="jumbotron" style={{ paddingTop: 5, height: 48 }}>
                <Button
                    className="float-end"
                    onClick={() => {
                        setA(true); setName("")
                        setCity('')
                        setMobile('')
                    }}
                >
                    Add
                </Button>
            </div>
            <Table bordered responsive >
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>
                            Name
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Mobile No
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((a, key) => {
                        if (key !== ind) {
                            return (
                                <tr style={{ textAlign: 'center' }} key={key}>
                                    <td>
                                        {a.name}
                                    </td>
                                    <td>
                                        {a.city}
                                    </td>
                                    <td>
                                        {a.mobile}
                                    </td>
                                    <td>
                                        <Button size="sm" onClick={() => edit(a, key)} >Edit</Button>
                                        <span>  </span>
                                        <Button size="sm" onClick={() => del(key)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        }
                        else {
                            return (
                                <tr style={{ textAlign: 'center' }} key={key}>
                                    <td >
                                        <Input
                                            placeholder='Enter name'
                                            type='text'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            autoComplete='off'
                                        />
                                    </td>
                                    <td>
                                        <Dropdown value={city} placeholder='Select City' options={cities} optionLabel='label' onChange={(e) => setCity(e.value)} />
                                    </td>
                                    <td>
                                        <Input
                                            placeholder='Phone No'
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            autoComplete='off'
                                        />
                                    </td>
                                    <td>
                                        <Button size="sm" onClick={completeEdit}> Update</Button>
                                        <span>  </span>
                                        <Button size="sm" onClick={() => {
                                            setName("")
                                            setCity('')
                                            setMobile('')
                                            setind(null)
                                        }}>Cancel</Button>
                                    </td>
                                </tr>
                            )
                        }
                    })}
                    {
                        a &&
                        <tr style={{ textAlign: 'center' }} key={data.length}>
                            <td >
                                <Input
                                    placeholder='Enter name'
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete='off'
                                />
                            </td>
                            <td>
                                <Dropdown value={city} placeholder='Select City' options={cities} optionLabel='label' onChange={(e) => setCity(e.value)} />
                            </td>
                            <td>
                                <Input
                                    placeholder='Phone No'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    autoComplete='off'
                                />
                            </td>
                            <td>
                                <Button size="sm" onClick={add} >Save</Button>
                                <span>  </span>
                                <Button size="sm" onClick={() => {
                                    setName("")
                                    setCity('')
                                    setMobile('')
                                    setA(false)
                                }}>Cancel</Button>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Table2
