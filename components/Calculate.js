import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper';



const Calculate = (props) =>{
    console.log(props)
    if(props.data==='loading'){
        return(
            <View style={{marginTop:20}}>
                <ActivityIndicator animating={true} color={Colors.red800}  />
            </View>
        )
    }else{
        return(
            <View style={{marginTop:20}}>
                <Text style={style.text}>{ props.data.percentage}</Text>
                <Text style={style.text}>{ props.data.result}</Text>
                <Text>{props.data.message ? 'Something wrong try again':''}</Text>
            </View>
        )
    }
}
export default Calculate;

const style = StyleSheet.create({
    text:{
        textAlign:'center',
        alignItems:'center',
        fontSize:24
    }
})