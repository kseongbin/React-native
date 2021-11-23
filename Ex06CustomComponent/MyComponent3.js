import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class MyComponent3 extends Component{
    render(){
        return (
            <View style={{margin:4}}>
                <Text>Component 3</Text>
                <Button onPress={this.props.onPress}  title={this.props.title} color={this.props.color}></Button>
            </View>
        );
    }
}