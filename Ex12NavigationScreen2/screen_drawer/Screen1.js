import React,{Component} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Screen1 extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Screen #1</Text>

                <Button title="open drawer" onPress={()=>{this.props.navigation.openDrawer();}}></Button>
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