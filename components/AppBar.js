import React from 'react'
import { Appbar,TextInput } from 'react-native-paper'

export default function AppBar(){
    return (
        <Appbar.Header>
          <Appbar.Content title="Love % Clculator" style={{alignItems:'center'}} />
        </Appbar.Header>
      );    
}