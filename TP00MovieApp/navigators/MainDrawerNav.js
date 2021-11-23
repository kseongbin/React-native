import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import MovieStackNav from "./MovieStackNav";

const Drawer= createDrawerNavigator()

const MainDrawerNav=()=>{
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="MovieStackNav" component={MovieStackNav}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default MainDrawerNav