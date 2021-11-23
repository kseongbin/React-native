import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class Acomponent extends Component{
    render(){
        return (
            <View style={{margin:8}}>
                <Text style={{color:'black'}}>{this.props.text}</Text>
            </View>
        );
    }
}