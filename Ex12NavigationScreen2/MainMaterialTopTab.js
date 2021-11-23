import React,{Component} from "react";
import {NavigationContainer} from '@react-navigation/native';

//MaterialTopTabNavigator객체를 만들어주는 기능함수 import
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstTab from "./screen_materialtoptab/FirstTab";
import SecondTab from "./screen_materialtoptab/SecondTab";
import ThirdTab from "./screen_materialtoptab/ThirdTab";

const TopTab= createMaterialTopTabNavigator();

export default class MainMaterialTopTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <TopTab.Navigator
                    tabBarPosition='top'
                    initialRouteName="tab2"
                    screenOptions={{
                        swipeEnabled:false,
                        tabBarActiveTintColor:'red',
                        tabBarInactiveTintColor:'black',
                        tabBarIndicatorStyle:{
                            backgroundColor:'green',
                            height:4,
                        }
                    }}>
                    <TopTab.Screen name="tab1" component={FirstTab}></TopTab.Screen>
                    <TopTab.Screen name="tab2" component={SecondTab}></TopTab.Screen>
                    <TopTab.Screen name="tab3" component={ThirdTab}></TopTab.Screen>
                </TopTab.Navigator>
            </NavigationContainer>
        );
    }
}