import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const Table3 = () => {
    const [data1, setData] = React.useState([
        {
            id: 0,
            name: "Prakash",
            city: "Istanbul",
            mobile: 9374839945
        },
        {
            id: 1,
            name: "John",
            city: "Paris",
            mobile: 8497404853
        }
    ]);
    const [ids, setids] = React.useState(2);
    const cities = [
        { label: 'New York', value: 'New York' },
        { label: 'Rome', value: 'Rome' },
        { label: 'London', value: 'London' },
        { label: 'Istanbul', value: 'Istanbul' },
        { label: 'Paris', value: 'Paris' }
    ]
    const [editingRows, setEditingRows] = React.useState({});
    const setActiveRowIndex = (index) => {
        let _editingRows = { ...editingRows, ...{ [`${data1[index].id}`]: true } };
        setEditingRows(_editingRows);
    }
    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    }
    const dropEditor = (s) => {
        return <Dropdown value={s.value} options={cities} onChange={(e) => s.editorCallback(e.value)} />
    }
    const action = (b) => {
        return (
            <>
                <Button
                    label='Delete'
                    onClick={() => {
                        let cd = [...data1]
                        cd.splice(data1.findIndex(a => a === b), 1);
                        setData(cd)
                    }}
                />
            </>
        )
    }
    const textEditor = (s) => {
        return (
            <>
                <InputText
                    type="text"
                    value={s.value}
                    onChange={(e) => s.editorCallback(e.target.value)}
                />
            </>
        )
    }
    const edit = (e) => {
        let edited = [...data1];
        let { newData, index } = e;

        edited[index] = newData;

        setData(edited);
    }
    const addrow = {
        id: ids,
        name: "",
        city: "",
        mobile: null
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
                    onClick={() => {
                        setData([...data1, addrow])
                        setActiveRowIndex(data1.length - 1)
                        setids(prev => prev + 1)
                    }}
                />
            </div>
            <DataTable
                value={data1}
                editMode="row"
                dataKey="id"
                editingRows={editingRows}
                onRowEditChange={onRowEditChange}
                onRowEditComplete={edit}
                responsiveLayout="scroll"
            >
                <Column
                    field="name"
                    header="Name"
                    editor={(e) => textEditor(e)}
                />
                <Column
                    field="city"
                    header="City"
                    editor={(e) => dropEditor(e)}
                />
                <Column
                    field="mobile"
                    header="Mobile"
                    editor={(e) => textEditor(e)}
                />
                <Column
                    rowEditor
                />
                <Column
                    header='Actions'
                    body={(e) => action(e)}
                />
            </DataTable>
        </div>
    )
}

export default Table3