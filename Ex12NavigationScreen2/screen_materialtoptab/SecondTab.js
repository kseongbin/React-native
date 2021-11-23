import React,{Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class SecondTab extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Second TAB</Text>
            </View>
        );
    }

    //컴포넌트의 라이프사이클 메소드
    // componentDidMount(){
    //     this.props.navigation.setOptions({
    //         tabBarLabel:'두번째',
    //         tabBarIcon: ()=><Image source={require('../icon/RN_logo.png')} style={{width:24, height:24}}></Image>,
    //     });
    // }

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