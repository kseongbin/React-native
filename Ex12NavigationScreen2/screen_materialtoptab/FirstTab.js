import React,{Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class FirstTab extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>First TAB</Text>
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