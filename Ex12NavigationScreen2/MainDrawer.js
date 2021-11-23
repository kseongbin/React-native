import React,{Component} from "react";
import {NavigationContainer} from '@react-navigation/native';

//DrawerNavigator객체를 만들어주는 기능함수 import
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from './screen_drawer/Screen1';
import Screen2 from './screen_drawer/Screen2';
import Screen3 from './screen_drawer/Screen3';

const Drawer = createDrawerNavigator();

export default class MainDrawer extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator
                    screenOptions={{
                        drawerActiveTintColor:'red',
                        drawerInactiveTintColor:'black',
                        drawerPosition:'left',
                        drawerType:'slide',
                        drawerHideStatusBarOnOpen:false,
                    }}>
                    <Drawer.Screen name="one" component={Screen1}></Drawer.Screen>
                    <Drawer.Screen name="two" component={Screen2}></Drawer.Screen>
                    <Drawer.Screen name="three" component={Screen3}></Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}