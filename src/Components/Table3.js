import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const Table3 = () => {
    const [data1, setData] = React.useState([
        {
            name: "Prakash",
            city: "Istanbul",
            mobile: 9374839945
        },
        {
            name: "John",
            city: "Paris",
            mobile: 8497404853
        }
    ]);
    const [adding, setadding] = React.useState(false)
    const [editing, setediting] = React.useState(false)
    const [editIndex, seteditIndex] = React.useState(null)
    const [name, setname] = React.useState('')
    const [city, setcity] = React.useState('')
    const [mobile, setmobile] = React.useState(undefined)
    const cities = [
        { label: 'New York', value: 'New York' },
        { label: 'Rome', value: 'Rome' },
        { label: 'London', value: 'London' },
        { label: 'Istanbul', value: 'Istanbul' },
        { label: 'Paris', value: 'Paris' }
    ]
    const action = (obj) => {
        let index = data1.findIndex(a => a === obj)
        if (adding && index === data1.length - 1) {
            return (
                <>
                    <Button
                        label='Add'
                        onClick={() => {
                            let cd = [...data1]
                            cd[data1.length - 1]["name"] = name
                            cd[data1.length - 1]["city"] = city
                            cd[data1.length - 1]["mobile"] = mobile
                            setData(cd)
                            setadding(false)
                            setname('')
                            setcity('')
                            setmobile(undefined)
                        }}
                    />
                    <Button
                        label='Cancel'
                        onClick={() => {
                            let cd = [...data1]
                            cd.pop()
                            setData(cd)
                            setadding(false)
                            setname('')
                            setcity('')
                            setmobile(undefined)
                        }}
                    />
                </>
            )
        }
        if (editing && index === editIndex) {
            return (
                <>
                    <Button
                        label='Update'
                        onClick={() => {
                            let cd = [...data1]
                            cd[editIndex]["name"] = name
                            cd[editIndex]["city"] = city
                            cd[editIndex]["mobile"] = mobile
                            setData(cd)
                            setediting(false)
                            setname('')
                            setcity('')
                            setmobile(undefined)
                        }}
                    />
                    <Button
                        label='Cancel'
                        onClick={() => {
                            let cd = [...data1]
                            setData(cd)
                            setediting(false)
                            setname('')
                            setcity('')
                            setmobile(undefined)
                        }}
                    />
                </>
            )
        }
        return (
            <>
                <Button
                    label='Edit'
                    onClick={() => {
                        seteditIndex(index)
                        setname(obj.name)
                        setcity(obj.city)
                        setmobile(obj.mobile)
                        setediting(true)
                    }}
                />
                <Button
                    label='Delete'
                    onClick={() => {
                        let cd = [...data1]
                        cd.splice(index, 1);
                        setData(cd)
                    }}
                />
            </>
        )
    }
    const body = (obj, s) => {
        let index = data1.findIndex(a => a === obj)
        if ((adding && index === data1.length - 1)||(editing && index === editIndex)) {
            switch (s) {
                case "name":
                    return (
                        <>
                            <InputText
                                type="text"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </>
                    )
                case "city":
                    return (
                        <>
                            <Dropdown
                                value={city}
                                options={cities}
                                onChange={(e) => setcity(e.value)}
                            />
                        </>
                    )
                case "mobile":
                    return (
                        <>
                            <InputText
                                type="text"
                                value={mobile}
                                onChange={(e) => setmobile(e.target.value)}
                            />
                        </>
                    )
                default:
                    break
            }
        }
        return obj[`${s}`]
    }
    const add = () => {
        let newData = [...data1]
        newData.push({
            "name": '',
            'city': '',
            'mobile': undefined
        })
        setData(newData)
        setadding(true)
    }


    return (
        <div className='container'>
            <div
                className="jumbotron"
                style={{ paddingTop: 5, height: 60 }}
            >
                <Button
                    className="float-end p-button"
                    label='Add'
                    onClick={add}
                />
            </div>
            <DataTable
                value={data1}
                responsiveLayout="scroll"
            >
                <Column
                    header="Name"
                    field='name'
                    body={(obj) => body(obj, "name")}
                />
                <Column
                    header="City"
                    field='city'
                    body={(obj) => body(obj, "city")}
                />
                <Column
                    header="Mobile"
                    field='mobile'
                    body={(obj) => body(obj, "mobile")}
                />
                <Column
                    header='Actions'
                    body={(obj) => action(obj)}
                />
            </DataTable>
        </div>
    )
}

export default Table3