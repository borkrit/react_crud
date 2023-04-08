import React from 'react'
import { Admin, Resource, SimpleForm } from 'react-admin';


import jsonServerProvider from "ra-data-json-server";
import { ListGuesser } from 'react-admin';
import PersonAdd from '../components/PersonAdd';

const dataProvider = jsonServerProvider('https://retoolapi.dev/kXWstu');

export default function AdminPage() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
        <Resource name='data' list={ListGuesser} create={PersonAdd} />
    </Admin>
  )
}
