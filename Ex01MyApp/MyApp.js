import React, { Component } from "react";
import {Text, View, Button, StyleSheet, Image} from 'react-native';

//리액트 네이티브에서는 Component를 상속받은 클래스들이 화면에 보여질 수 있음.
class MyApp extends Component{
    //이 컴포넌트클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    //이 메소드에서 리턴된 뷰(컴포넌트)를 화면에 그려냄
    //이 메소드안에서 JSX(Javascript XML)언어로 뷰를 설계하고 이를 return함
    render(){

        //지역변수
        let name= "SAM";
        let btnTitle="click me";

        //기본적으로 컴포넌트는 하나의 뷰만 리턴할 수 있음.
        //그래서 뷰 그룹 역할의 컴포넌트가 필요함
        //JSX언어는 <>태그문안에서 {}를 통해서 JS의 변수와 함수호출 등이 가능함
        //스타일작업은 CSS의 문법을 기본으로 하되 객체로 사용함
        return (<View style={style.rootContainer}>
                    <Text style={style.titleText}>Hello {name}</Text>
                    <Text style={style.plainText}>Nice to meet you!</Text>
                    
                    {/* 버튼컴포넌트는 스타일속성이 불가함 */}
                    <View style={{marginTop:16,}}>
                        <Button title={btnTitle}></Button>
                    </View>
                    <Image source={require('./image/moana01.jpg')} style={{margin:4, flex:1, width:null, resizeMode:'contain',}}></Image>
                </View>);
    }
}

//스타일객체들을 한곳에 몰아서 작성하도록 만든 클래스
const style= StyleSheet.create({
    rootContainer:{
        backgroundColor:"#AAFFCC",
        flex:1,
        padding:16,
    },
    titleText:{
        color:'blue',
        fontSize:20,
        fontWeight:"bold",
        margin:16,
    },
    plainText:{
        margin:8,
        color: "#333333",
    },
    btn:{
        marginTop:20,
    }
});

//MyApp클래스의 스타일객체들
const textStyle={
    color:'#FF0000',
    font:20, //기본 단위 dp
    fontWeight: 'bold',
    margin: 16,
};

const plainTextStyle={
    margin:8,
    color:'#333333',
}

const rootContainerStyle={
    backgroundColor:"#AAFFCC",
    //높이는 기본이 wrap_content 임. 만약 전체높이를 하고 싶다면
    //height: "100%",
    //기본적으로 RN에서는 Flex 스타일을 권장함.
    //세로높이에 대해 다른 뷰들과의 비례를 통해 사이즈 결정
    //android의 layout_weight과 같은 역할 속성
    flex:1,
    padding: 16,
    //flexDirection:'column',

}

//위에서 설계한 MyApp 컴포넌트클래스를 다른 .js(index.js)에서
//import하려면 여기서 export를 해줘야 함
//하나의 .js문서안에 export 중에 하나는 반드시 default여야 함.
export default MyApp;