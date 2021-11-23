import React, { Component } from "react";
import {Alert, Button, StyleSheet, View, Text, Image} from "react-native";

class MainComponent extends Component{

    //이 컴포넌트 클래스의 멤버변수(property라고 부름) 위치
    text="Hello ReactNative";   //일반 변수 - 화면갱신에 영향이 없음
    
    //아주 특별한 변수
    state={
        text:"Hello react native",

        //이미지 컴포넌트가 보여줄 이미지객체
        img: require('./image/moana01.jpg'),
    };

    render(){
        return (<View style={style.root}>
                    <Button title="button" onPress={clickBtnFunction}></Button>
                    {/* 굳이 함수를 별도로 만들지 않고 이곳에서 바로 지정 가능함 */}
                    {/* <Button title="click me" color="orange" onPress={function(){Alert.alert('pressed!!');}}></Button> */}
                    <Button title="click me" color="orange" onPress={()=>Alert.alert('pressed!!')}></Button>

                    {/* 사실 현업에서는 가급적 이벤트 콜백함수들 전역함수로 만들지 않음 */}
                    {/* 대부분의 경우 이 컴포넌트 클래스의 멤버메소드로 함수를 만들고 사용함 */}
                    {/* JS에서는 멤버를 사용할때 반드시 this.키워드가 명시되어야 함. */}
                    <Button title="press me" color='indigo' onPress={this.clickBtn}></Button>

                    {/* 버튼을 클릭하여 글씨를 변경하기 */}
                    {/* 기존 메카니즘고 ㅏ전혀 다름. */}
                    {/* 글시를 가지고 있는 컴포넌트를 참조하는 등의 작업은 하지 않음 */}
                    {/* Text컴포넌트가 글씨값을 가진 변수를 보여주고 그 변수의 값을 변경해서 다르게 보이게끔 처리 */}
                    {/* 멤버의 접근은 무조건 this.키워드와 함께 써야함. */}
                    <View style={{marginTop:16,}}>
                        <Button title="change text" onPress={this.changeText}></Button>
                        <Button title="change text" onPress={this.changeTextByState} color="red"></Button>
                        <Text style={style.plainText}>{this.state.text}</Text>
                    </View>

                    {/* 종합하면 멤버변수는 state를 이용하고.... */}
                    {/* 멤버메소드는 화살표함수를 이용하여 앱을 구현 */}

                    <View style={{marginTop:16, flex:1,}}>
                        <Button title="change image" color="orange" onPress={this.changeImage}></Button>
                        <Image source={this.state.img} style={style.img}></Image>
                    </View>

                </View>);
    }//render metod...

    changeImage= ()=>{
        //state변경은 setState()메소드로 해야 화면 자동 갱신
        this.setState({img: require("./image/moana02.jpg")});
    }

    changeTextByState=()=>{
        //컴포넌트는 state라는 특별한 멤버변수를 가지고 있음.
        //이 state의 값이 변경되는 화면을 자동 갱신함! [이 방법을 RN에서 추천]
        //this.state.text="Nice to meet you."; //여전히 화면갱신 안됨
        //화면 자동 갱신되는 state의 값변경은 반드시 setState()메소드를 호출해야 함
        this.setState({text:"Nice to meet you."});  //자동 화면 갱신
    }

    //멤버메소드 위치
    // changeText(){
    //     //Alert.alert();
    //     //선언적 함수로 만들면 this키워드는 MainComponent가 아님.
    //     this.text= "Nice!";
    // }

    // changeText= function() {
    //     this.text='Nice'; //이것도 에러.. 여기서의 this는 이벤트를 발생한 Button이 아님
    // }

    //이벤트처리 함수는 반드시 화살표 함수로 만들어야 this키워드가 컴포넌트를 지칭하게 됨
    changeText= ()=>{
        //일반 멤버변수는 변경해서 화면갱신이 자동으로 되지 않음
        this.text = "Nice to meet you.";
        // Alert.alert(this.text);
        //되게 하려면.. 별도로 다시 화면을 갱신해 달라고 요청!![권장하는 기법 아님]
        this.forceUpdate();
    }


    //function clickBtn(){}   //ERROR - class문법안에서는 function키워드 불가
    clickBtn(){
        Alert.alert('clicked!!');
    }

}//MainComponent class....

//1)선언적 함수 만들기
// function clickBtnFunction(){
//     Alert.alert('click button!');
// }

//2)익명 함수로 만들어보기
// let clickBtnFunction = function(){
//     Alert.alert('clicked button!');
// }

//3)화살표함수로 만들어보기 [RN에서는 이 방식을 선호함]
let clickBtnFunction = ()=>{
    Alert.alert('clicked button!');
}

//스타일시트 객체 생성
const style = StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    plainText:{
        marginTop:16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
        color:"black",
    },
    img:{
        marginTop:8,
        flex:1,
        width:null,
        resizeMode:'cover',
    }
});


//다른 .js에서 이 MainComponent를 사용할 수 있도록, 추출
export default MainComponent;