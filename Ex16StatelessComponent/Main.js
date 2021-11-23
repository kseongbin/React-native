import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Main extends Component{
    render(){
        return (
            <View style={style.root}>
                {/* 새로운 custom component를 만드는 2가지 방법 */}
                {/* 1. stateful Component : Component 클래스를 상속해서 만드는 일반적인 컴포넌트*/}
                {/* 2. stateless Component :  마치 함수를 만들듯이 만들어진 컴포넌트[그래서 (함수형 컴포넌트)라고 부름*/}

                {/* 1) 일반적인 컴포넌트 */}
                <MyComponent></MyComponent>

                {/* 2) 함수형컴포넌트 - 사용법 똑같음 */}
                <MyComponent2></MyComponent2>

                {/* 똑같은 간단한 컴포넌트들은 함수형이 코드가 간결함 */}

                {/* 함수형컴포넌트는 state는 없지만, prop는 전달 받을 수 있음 */}
                <My3 title="sam"></My3>
                <My4 title="hong"></My4>
                <My5 name="lee" age="20"></My5>
                <My6 name="kim" age="25"></My6>

            </View>
        );
    }
}

//3) 일반적인 컴포넌트의 props 받는 모습
class My3 extends Component{
    render(){
        return(
            <View>
                <Text style={style.text}> {this.props.title} </Text>
            </View>
        );
    }
}

//4) 함수형 컴포넌트의 props 받는 모습
// 클래스가 아니기에 this.props라는 특별한 멤버변수가 없음!!
// 그래서 함수형 컴포넌트 함수의 파라미터로 속성들이 한방에 객체로 만들어져 전달됨
const My4=(props)=>{
    return(
        <View>
            <Text style={style.text}> {props.title} </Text>
        </View>
    );
}

//5) 여러개의 속성 받는 함수형 컴포넌트
const My5=(props)=>{
    return(
        <View>
            <Text style={style.text}>{props.name}</Text>
            <Text style={style.text}>{props.age}</Text>
        </View>
    );
}

//6) 여러개를 받을 때.. 구조분해할당으로 받는 형식을 더 선호
const My6=({name, age})=>{
    return(
        <View>
            <Text style={style.text}>{name}</Text>
            <Text style={style.text}>{age}</Text>
        </View>
    );
}


//1) stateful 컴포넌트 - 일반적인방법
class MyComponent extends Component{
    render(){
        return (
            <View>
                <Text style={style.text}>Hello MyComponent</Text>
            </View>
        );
    }
}

//2) 함수형 컴포넌트
const MyComponent2= ()=>{
    return (
        <View>
            <Text style={style.text}>Nice MyComponent2</Text>
        </View>
    );
}


const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    text:{margin:8, padding:8, color:'black'},
});