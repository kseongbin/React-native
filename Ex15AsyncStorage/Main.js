import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Main extends Component{

    state={
        text:"",
        inputText:"",
    }

    render(){
        return (
            <View style={style.root}>
                {/* 저장할 데이터를 입력할 컴포넌트 */}
                <TextInput 
                    style={style.textInput}
                    placeholder="글씨을 입력하세요."
                    onChangeText={this.changeText}
                    value={this.state.inputText}>                    
                </TextInput>
                {/* AsyncStorage에 저장하는 버튼 */}
                <Button title="save data" onPress={this.saveData}></Button>

                {/* 사이 간격을 위한 그냥 뷰 */}
                <View style={{margin:16,}}></View>

                {/* AsyncStorage에서 데이터를 로딩버튼 */}
                <Button title="load data" color="orange" onPress={this.loadData}></Button>
                <Text style={{padding:8, color:'black'}}> {this.state.text} </Text>

                <View style={{margin:16,}}></View>

                <Button title="store data" color="indigo" onPress={this.storeData}></Button>
                <Button title="read data" color="green" onPress={this.readData}></Button>

            </View>
        );
    }

    //사용자입력글씨가 변경될때마다 발동하도록 지정된 콜백함수
    changeText=(value)=>{ 
        //파리머터 value : 입력된 글씨
        this.setState({inputText:value});
    }

    saveData=()=>{
        //비동기방식으로 데이터를 저장하는 클래스
        AsyncStorage.setItem("Data", this.state.inputText);//키,벨류
        Alert.alert('save data');

        //데이터 저장이 끝났으로 TextInput의 글씨를 지우기
        this.setState({inputText:""});
    }

    loadData=()=>{
        //비동기방식으로 저장소의 데이터 읽어오기
        AsyncStorage.getItem('Data').then( (value)=>{ this.setState({text:value}) } );
    }


    //ES7버전에서 비동기 처리의 프로미스문법을 대체하기 위해
    //비동기를 동기로 기다리도록 하는 문법 : async - await
    storeData= async ()=>{
        await AsyncStorage.setItem('msg', 'Hello react native');

        Alert.alert('saved data');
    }

    readData= async ()=>{
        const value= await AsyncStorage.getItem('msg');
        if(value!=null) this.setState({text:value});
    }


}

const style=StyleSheet.create({
    root:{flex:1, padding:16,},
    textInput:{
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16,
    }
});