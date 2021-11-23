import React,{Component} from "react";
import { Text,View,StyleSheet, Button } from "react-native";

export default class Second extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Second Screen</Text>

                {/* Home으로 가는 버튼 */}
                <Button title="Back to the Home screen" onPress={ ()=>this.props.navigation.navigate('Home') }></Button>

                {/* 이전 화면을 돌아가는 버튼 */}
                <Button title="Go Back to the screen" color="orange" onPress={ ()=>this.props.navigation.goBack() }></Button>

                {/* 같은 컴포넌트가 또 새로 만들어 보이고 싶다면 */}
                <Button title="Make a new same screen" color="indigo" onPress={ ()=>this.props.navigation.push('Second') }></Button>

                {/* Navigator의 첫번재 스크린 이동하기 */}
                <Button title="Go to First screen" color="green" onPress={ ()=>this.props.navigation.popToTop() }></Button>

            </View>
        );
    }
}

const style = StyleSheet.create({
    root:{flex:1, padding:16,},
    text:{color:'black', padding:8,},
});
