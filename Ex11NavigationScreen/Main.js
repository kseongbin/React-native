//## react-navigation 라이브러리 [reactnavigation.org]

//RN은 기본적으로 화면전환 기능을 제공하지 않음
//그래서 별도의 라이브러리를 이용해서 화면 전환을 구현함
//가장 대표적인 라이브러리 : react navigation

//1. 기본 필수 라이브러리 설치 [install]

// $ npm install @react-navigation/native

// ** package.json 파일에 라이브러리가 추가된 모습 확인 가능!

//2. 추가로 인스톨 해야할 라이브러리 2개

// $ npm install react-native-screens react-native-safe-area-context

//3. 원하는 화면전환기법을 선택하여 해당기능의 Navigator를 설치

//1)NavigationContainer부터 배치

import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native";

//2)Stack Navigator 사용해보기
//install 작업 - (npm install @react-navigation/stack, npm install react-native-gesture-handler 설치)

//StackNavigator객체를 만들어주는 함수 import
import {createStackNavigator} from '@react-navigation/stack';

//StackNavigator가 보여줄 화면들(screen) import
import Home from "./screen/Home";
import Second from "./screen/Second";
import { Text,View,Image } from "react-native";

//Stack Navigator객체 생성
const Stack= createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            //Navigator를 가지는 최상위 컴포넌트
            <NavigationContainer>
                {/* Stack Navigator 컴포넌트 배치 */}
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle:{backgroundColor:'green'},
                        headerTintColor:'white',
                        headerTitleStyle:{fontWeight:'bold'},
                        headerTitleAlign:'center',
                    }}>
                    <Stack.Screen options={{
                        headerTitle: ()=>{return <LogoTitle></LogoTitle>}
                    }} name="Home" component={Home}></Stack.Screen>
                    <Stack.Screen options={{
                        headerShown:true,
                    }} name="Second" component={Second}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

//Home 컴포넌트의 Header 모양 컴포넌트
class LogoTitle extends Component{
    render(){
        return(
            <View style={{flexDirection:'row', paddingLeft:8, alignItems:'center'}}>
                <Image source={require('./image/thumb_moana.png')} style={{width:24, height:24}}></Image>
                <Text style={{color:'yellow', fontWeight:'bold', fontSize:24, marginLeft:16}}>홈</Text>
            </View>
        );
    }
}