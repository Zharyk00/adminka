import React from 'react'
import { List, Datagrid, TextField, EmailField, UrlField, EditButton, DeleteButton, TextInput, ReferenceInput } from 'react-admin';





function ListField() {
    return (
        <List >
            <Datagrid rowClick="edit" >
                <TextField source='name' />
                <TextField source='age' />
                <TextField source="_id" />
                <TextField source="name" />
                <TextField source='username' />
                <EmailField source="email" />
                <TextField source="phone" />
                <UrlField source="website" />
                <TextField source="company.name" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}

export default ListField