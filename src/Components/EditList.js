import { Edit, ReferenceInput, SimpleForm, TextInput, useRecordContext } from 'react-admin';

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

const EditList = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Edit>

);

export default EditList;