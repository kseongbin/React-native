import React,{Component} from 'react';
import {View, Button} from 'react-native';

export default class Bcomponent extends Component{
    render(){
        return (
            <View style={{margin:8}}>
                <Button onPress={this.props.onPress} color="red" title="change text"></Button>
            </View>
        );
    }
}