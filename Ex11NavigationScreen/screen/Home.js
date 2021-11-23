import React,{Component} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Home extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Home Screen</Text>

                {/* 화면전환을 위한 버튼 */}
                <Button title="Go to the Second screen" onPress={this.gotoSecond}></Button>
            </View>
        );
    }

    gotoSecond=()=>{
        //react-navigation은 네비게이팅을 하기 위해
        //StackNavigator에서 보여주는 스크린(컴포넌트)들에 네비게이팅 능력을 가진
        //객체를 자동으로 전달해 줌. 이 객체를 navigation이라고 함.
        //이 navigation은 자동으로 이 컴포넌트의 아주 특별한 변수인 props안에 위치함.
        this.props.navigation.navigate('Second');

        //만약 화면을 전환하면서 현재 화면(컴포넌트)를 finish()하고 싶다면
        //this.props.navigation.replace('Second');
    }

}

const style= StyleSheet.create({
    root:{flex:1, padding:16, },
    text:{color:'black', padding:8,},
});