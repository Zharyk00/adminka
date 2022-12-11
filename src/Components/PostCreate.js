import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

function PostCreate(props) {
    return (
        <Create title={'Create a Post'}{...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='age' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <TextInput source='website' />
                <TextInput source='company.name' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate