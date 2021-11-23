import { assertAnyTypeAnnotation, booleanTypeAnnotation, thisTypeAnnotation } from '@babel/types';
import React,{Component} from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    //SectionList : 섹션(그룹) 구분이 가능하도록 설계된 리스트컴포넌트
    //대량의 데이터들은 state라는 특별한 변수에 선언.
    //멤버변수를 반드는 또 다른 방법. 생성자 안에서 변수 만들기
    //생성자
    constructor(){
        //JS는 상속받은 클래스(부모클래스의 생성자를 명시적으로 호출해야만 함)
        super();

        this.state= {
            //1. 간단하게 string들이 섹션별로 있는 대량의 데이터들
            //SectionList에 보여질 데이터배열을 반드시 [title, data라는 2개의 멤버(프로퍼티)를 가져야 함.]
            datas: [
                {title:"한식", data:['백반','비빔밥','고기산적']},
                {title:"중식", data:['짜장면','짬뽕','탕수육']},
                {title:"일식", data:['초밥','회','덮밥']},
            ],
        }
    }

    render(){
        return (
            <View style={style.root}>
                <Text style={style.title}>SectionList TEST</Text>

                {/* SectionList의 필수속성 3개 */}
                {/* 1) sections - 섹션리스트에 보여줄 데이터들 */}
                {/* 2) renderItem - 아이템1개의 모양을 리턴해주는 콜백함수 지정 */}
                {/* 3) renderSectionHeader - 섹션별 헤더모양을 리턴해주는 콜백함수 지정 */}
                <SectionList
                    sections={this.state.datas}
                    //콜백함수의 파라미터로 전달된 함수는 sections배열의 개수만큼 호출됨
                    renderSectionHeader={ ({section})=>{
                        //헤더모양
                        return (
                            <View style={style.sectionHeader}>
                                <Text style={style.sectionTitle}>{section.title}</Text>
                            </View>
                        );
                    }}
                    //위 sections에 지정한 배열의 각 요소객체의 data프로퍼티 배열의 모양을 지정
                    renderItem={ ({item, index})=>{
                        return (
                            <TouchableOpacity onPress={ ()=>{Alert.alert("index: "+index, "메뉴 : " + item)} } style={style.sectionItem}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        );
                    } }>                                            
                </SectionList>



            </View>
        );
    }
}

const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    title:{
        color:'black',
        fontSize:24,
        fontWeight:'bold',
        padding:16,
    },
    sectionHeader:{
        padding:8,
        backgroundColor:'#eeeeee',
    },
    sectionTitle:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    sectionItem:{
        padding:8,
    }
});

