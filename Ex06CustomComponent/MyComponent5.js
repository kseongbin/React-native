import React,{Component} from 'react';
import {View, Button} from 'react-native';

export default class MyComponent5 extends Component{
    render(){
        return (
            <View style={{margin:8}}>
                {/* ...(스프레드 연산자) props객체의 멤버를 펼쳐주는 연산자 */}
                <Button {...this.props}></Button>
            </View>
        );
    }
}