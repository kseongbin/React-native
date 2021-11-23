import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Acomponent from './Acomponent';
import Bcomponent from './Bcomponent';

//다른 js문서에 있는 클래스 사용
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';

export default class Main extends Component{

    //Acomponent에 전달해 줄 특별한 변수
    state={
        text:"Hello world!",
    }

    render(){
        return (
            <View style={style.root}>
                <Text>Hello react native</Text>

                {/* 나만의 별도 컴포넌트를 만들 수 있고 사용할 수 있음. */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* 컴포넌트들이 보여주는 글씨가 똑같으면 효용성이 없음 */}
                <MyComponent2 name="sam" title="save" color="orange"></MyComponent2>  
                <MyComponent2 name="robin" title="load"></MyComponent2>

                {/* 별도의 .js문서에 나만의 컴포넌트는 만들어 사용 */}
                <MyComponent3 onPress={ this.clickBtn } title="press me" color="indigo"></MyComponent3>
                <MyComponent3 onPress={ this.clickBtn } title="click me"></MyComponent3>

                {/* 디폴드 속성값을 가지는 컴포넌트 만들고 사용 */}
                <MyComponent4 title="Hello" color="blue" onPress={this.clickBtn}></MyComponent4>
                <MyComponent4></MyComponent4>

                {/* 여러 속성을 한번에 적용시켜주는 컴포넌트 만들고 사용 */}
                <MyComponent5 title="nice" color="aqua" onPress={this.clickBtn}></MyComponent5>

                {/* 컴포넌트간에는 데이터 전달 불가 */}
                {/* 부모 컴포넌트를 이용하여 자식컴포넌트끼리 연동하기 */}
                <Acomponent text={ this.state.text }></Acomponent>
                <Bcomponent onPress={ this.changeText }></Bcomponent>

            </View>
        );
    }

    //Bcomponent에 전달해줄 콜백메소드
    changeText= ()=>{
        this.setState({text:"Nice to meet you."});
    }

    clickBtn= ()=>{
        Alert.alert('pressed button!!');
    }

}//Main class..

//속성을 전달받는 나만의 컴포넌트 설계
class MyComponent2 extends Component{    
    render(){
        return (
            <View style={{margin:4}}>
                {/* MyComponent2를 사용할때 전달된 속성명(name)로 전달된 값을 컴포넌트안에 아주 특별한 멤버변수(props)에 자동으로 속성명의 멤버로 저장되어 있음. */}
                <Text>Hello { this.props.name }!</Text>
                <Button title={this.props.title} color={this.props.color}></Button>
            </View>
        );
    }
}

//나만의 컴포넌트 설계
class MyComponent extends Component {
    render(){
        return (
            <View style={{margin:4}}>
                <Text>Hello sam!</Text>
                <Button title="click me"></Button>
            </View>
        );
    }
}

const style= StyleSheet.create({
    root:{ flex:1 }
});