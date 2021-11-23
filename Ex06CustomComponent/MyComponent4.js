import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class MyComponent4 extends Component{

    //props가 전달되지 않았을때를 대비하기 위한 기본속성[defaultProps]
    static defaultProps={
        title: 'untitled',
        color: 'orange',
        onPress: ()=>{},
    }

    render(){
        return (
            <View style={rootStyle}>
                <Button title={this.props.title} color={this.props.color} onPress={this.props.onPress}></Button>
            </View>
        );
    }
}

const rootStyle={margin:8};