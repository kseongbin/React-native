import React,{Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Screen2 extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Screen #2</Text>
            </View>
        );
    }
}

const style= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    },
    text:{
        color:'black',
        padding:8,
    }
});