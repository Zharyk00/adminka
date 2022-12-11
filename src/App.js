import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from 'react-admin';
import PostIcon from '@mui/icons-material/Book';
import ServerProvider from 'ra-data-json-server';
import ListField from "./Components/ListField";
import EditList from './Components/EditList'
import PostCreate from "./Components/PostCreate";
const url = "http://159.65.123.228/login/get"


const dataProvider = ServerProvider('http://localhost:3000/login')
function App() {

  return (
    <Admin dataProvider={dataProvider} >
      <Resource name="users" list={ListField} icon={PostIcon} />
    </Admin>
  );
}

export default App;
