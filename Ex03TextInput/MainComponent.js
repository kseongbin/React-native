import React,{Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default class MainComponent extends Component{

    //Text컴포넌트가 보여줄 값을 가지고 있는 아주 특별한 변수 : state(컴포넌트의 상태값)
    state={
        text:'',
        text2:'RESULT',
        text3:'Hello',
    };

    //TextInput에 입력된 값들을 저장하는 일반 변수
    inputValue='';

    render(){
        return (
            <View style={ style.root }>
                {/* TextInput컴포넌트는 기본 스타일이 없음- 그래서 아무것도 화면에 안보임 [반드시 style작업이 필요함] */}
                {/* 사용자가 글씨를 입력할때마다 그 글씨를 아래 Text컴포넌트에 보이도록 */}
                <TextInput onChangeText={ this.changeText } style={ style.textInput }></TextInput>
                <Text style={ style.plainText }> { this.state.text } </Text>

                <TextInput onSubmitEditing={this.submitText} style={style.textInput}></TextInput>
                <Text style={style.plainText}> {this.state.text2} </Text>

                <TextInput onChangeText={this.changeText2} style={style.textInput}></TextInput>
                <View style={{marginTop:8, marginBottom:8}}>
                    <Button title="입력완료" onPress={this.clickBtn}></Button>
                </View>
                <Text style={style.plainText}> {this.state.text3} </Text>

                {/* 여러줄입력 TextInput */}
                <TextInput multiline={true} numberOfLines={4} style={style.textInput}></TextInput>

            </View>
        );
    }//render method..

    changeText2=value=>this.inputValue= value; //일반변수에 입력값을 저장 [화면갱신안됨]

    //버튼클릭에 반응하도록 등록된 콜백메소드
    //안드로이드 자바에서는 EditText뷰를 참조하여 값을 얻어와서 처리..
    //하지만.. RN에서는 컴포넌트(뷰)를 참조하는 기능이 없음.
    clickBtn=()=>{
        this.setState({text3:this.inputValue});
    }

    //소프트키보드의 완료버튼을 클릭했을때 발동하도록 등록된 콜백메소드
    //파라미터로 전달되는 것이 입력된 글씨가 아니라.. submit이벤트 객체임
    submitText=(submitEvent)=>{
        //이벤트객체로 부터 값을 얻어와야 함.
        let value = submitEvent.nativeEvent.text;
        //Text컴포넌트와 연결된 특별한 변수(state)에 설정하기
        this.setState({text2:value});
    }

    //글씨가 변경될때 마다 발동하도록 등록된 콜백메소드[콜백메소드는 무조건 화살표함수로 제작]
    // 이 콜백메소드는 파라미터 변경된 글씨를 받도록 설계되어 있음.
    changeText= (value)=>{
        //전달된 글씨를 Text컴포넌트와 연결된 특별한 변수에 = 로 대입하면 화면갱신이 자동으로 되지 않음.
        //반드시 state값의 변경은 this.setState()메소드를 이용
        this.setState({text:value});
    }


}//MainComponent class..

//스타일객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    textInput:{
        borderWidth:2,
        borderColor:'green',
        borderRadius:8,
        backgroundColor:'white',
        paddingLeft: 16,
        paddingRight:16,

        maxHeight:200,
    },
    plainText:{
        marginTop: 16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
        color:'black',
        marginBottom: 20,   
    }
});

