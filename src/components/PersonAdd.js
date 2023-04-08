import React from 'react'
import { Create, SimpleForm, TextInput,ImageInput,ImageField, UrlField } from 'react-admin'

export default function PersonAdd() {
  return (
    <Create>
        <SimpleForm>
            <TextInput source='title' />
            <TextInput source='position' />
        
        </SimpleForm>
    </Create>
  )
}
