import React, { useState } from 'react'
import {View,Text,TouchableWithoutFeedback,Keyboard, TouchableOpacity} from 'react-native'
import {Style} from './styles/Style'
import AppBar from './components/AppBar'
import { TextInput,Button} from 'react-native-paper'
import Calculate from './components/Calculate'

export default function App(){
  const dissMissKey = () =>{
    Keyboard.dismiss()
  }
  const [firstName,setFirstName] = useState('');
  const [secondName,setSecondName] = useState('');
  const [data,setData] = useState('');
  const handleSubmit = () =>{
    setData('loading');
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`, {
      "headers": {
        "x-rapidapi-key": "43d6c0708dmshd8b9efb4c933174p19529bjsnf6c492721534",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
    .then(data => data.json())
    .then(data2=>{
      // console.log(data2)
      setData(data2);
    })
    // console.log('come')
  }
  return(
    <TouchableWithoutFeedback  onPress={dissMissKey}>
      <View>
        <AppBar />
        <View style={Style.container}>
            <TextInput
                label="First person name(male)"
                value={firstName}
                onChangeText={(value)=>setFirstName(value)}
              />
            <TextInput
                style={{marginTop:10}}
                label="Second person name(female)"
                value={secondName}
                onChangeText={(value)=>setSecondName(value)}
              />
              <Button mode="contained" onPress={()=>handleSubmit()} style={{padding:10,marginTop:10,width:200,marginLeft:50,borderRadius:30}}>
                Calculate
              </Button>
              <Calculate data={data} />            
        </View>
     </View>
    </TouchableWithoutFeedback>
  )
}