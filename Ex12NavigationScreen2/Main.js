import React,{Component} from "react";
import {NavigationContainer} from '@react-navigation/native';

//BottomTabNavigator객체를 만들어주는 기능함수 import
import {creatBottomTabNavigator, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//탭이 보여주는 화면들 import
import FirstTab from "./screen_bottomtab/FirstTab";
import ThirdTab from "./screen_bottomtab/ThirdTab";
import SecondTab from "./screen_bottomtab/SecondTab";
import { Image } from "react-native";

//위에서 import한 함수를 호출하여 BottomTabNabigator객체를 생성
const BottomTab= createBottomTabNavigator();

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                <BottomTab.Navigator
                    initialRouteName="second"
                    screenOptions={{
                        tabBarActiveTintColor:'red',
                        tabBarInactiveTintColor:'black',
                        tabBarActiveBackgroundColor:'gray',
                        tabBarShowLabel:true,
                        tabBarLabelPosition:'beside-icon',
                    }}>
                    <BottomTab.Screen 
                    name="first" 
                    component={FirstTab}
                    options={{
                        tabBarLabel:'첫번째',
                        tabBarIcon: ()=><Image source={require('./icon/RN_logo.png')} style={{width:24, height:24}}></Image>,
                        tabBarBadge: "new",
                    }}>
                    </BottomTab.Screen>
                    <BottomTab.Screen name="second" component={SecondTab}></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={ThirdTab}></BottomTab.Screen>

                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }
}