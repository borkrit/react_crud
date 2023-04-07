import React from 'react'
import { Admin, Resource } from 'react-admin';


import jsonServerProvider from "ra-data-json-server";
import { ListGuesser } from 'react-admin';

const dataProvider = jsonServerProvider('https://retoolapi.dev/kXWstu');

export default function AdminPage() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
        <Resource name='data' list={ListGuesser} />
    </Admin>
  )
}
