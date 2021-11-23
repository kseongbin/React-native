import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image} from 'react-native';

export default class Main extends Component{

    //RN에서 대량의 데이터를 보여주기 위한 설계된 컴포넌트
    //1) FlatList
    //2) SectionList

    //대량의 데이터 변수 -배열 [화면에 영향을 미치는 특별한 변수 : state]
    state= {
        //1. 일단 간단한 string 배열
        datas: ["aaa","bbb","ccc","ddd"],

        //2. ListLayout2 예제의 화면을 만들어보기.
        datas2: [
            {title:"sam", message:"Hello world", img: require('./image/moana01.jpg')},
            {title:"robin", message:"Hello RN", img: require('./image/moana02.jpg')},
            {title:"hong", message:"Hello android", img: require('./image/moana03.jpg')},
            {title:"kim", message:"Hello ios", img: require('./image/moana04.jpg')},
            {title:"rosa", message:"Hello web", img: require('./image/moana05.jpg')},
            {title:"sam", message:"Hello world", img: require('./image/moana01.jpg')},
            {title:"robin", message:"Hello RN", img: require('./image/moana02.jpg')},
            {title:"hong", message:"Hello android", img: require('./image/moana03.jpg')},
            {title:"kim", message:"Hello ios", img: require('./image/moana04.jpg')},
            {title:"rosa", message:"Hello web", img: require('./image/moana05.jpg')},
        ],
    }

    render(){

        // this.state.datas2.forEach((item, index)=>{
        //     item.key= index+"";
        // });

        return (
            <View style={style.root}>
                <Text style={style.titleText}>FlatList TEST</Text>

                {/* 1. 기본적인 FlatList 사용 */}
                {/* FlatList의 필수 속성 2가지 */}
                {/* 1) data - FlatList가 보여줄 대량의 데이터들(배열) 지정 */}
                {/* 2) renderItem - 아이템 하나의 모양(컴포넌트 XML)을 만들어서 리턴해주는 콜백함수 지정 */}
                {/* <FlatList
                    data={ this.state.datas }
                    renderItem={ ( obj )=>{
                        //전달받은 파라미터 1개 객체임- 이 객체는 멤버로 3개를 가짐 [요소값(item),인덱스번호(index),배열참조변수(array)]
                        return (
                            <View style={style.itemView}>
                                <Text> {obj.index +" : " + obj.item} </Text>
                            </View>
                        );
                    } }>
                </FlatList> */}

                {/* renderItem 속성의 콜백함수 파라미터에 [구조분해할당]을 많이 사용함 */}
                {/* <FlatList
                    data={ this.state.datas }
                    // [구조분해할당]문법으로 파라미터를 곧바로 멤버값들만 받기
                    renderItem={ ( {item, index} )=>{
                        // let index= obj.index;
                        // let item= obj.item;

                        //구조분해할당 문법
                        //let {index, item}= obj;

                        //전달받은 파라미터 1개 객체임- 이 객체는 멤버로 3개를 가짐 [요소값(item),인덱스번호(index),배열참조변수(array)]
                        return (                            
                            <TouchableOpacity onPress={ ()=>{ Alert.alert(item+","+index) }  } style={style.itemView}>
                                <Text> {index +" : " + item} </Text>
                            </TouchableOpacity>
                        );
                    } }>
                </FlatList> */}

                {/* 나름 모양을 가진 FlatList */}
                {/* FlatList는 아이템개수가 많으면 자동 스크롤됨 */}
                <FlatList
                    showsVerticalScrollIndicator={false}                    
                    data={this.state.datas2}
                    renderItem={ ({item, index})=>{
                        return (
                            <TouchableOpacity style={style.item} onPress={()=>this.clickItem(index, item)}>
                                <Image source={item.img} style={style.itemImg}></Image>
                                <View>
                                    <Text style={style.itemTitle}>{item.title}</Text>
                                    <Text style={style.itemMessage}>{item.message}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } }>                    
                </FlatList>
            </View>
        );
    }

    //아이템뷰 클릭시에 실행시킬 메소드
    clickItem= ( index, item )=> Alert.alert('index:' + index, 'title:'+ item.title);
    

}

const style= StyleSheet.create({
    root:{
        flex: 1,
        padding:16,
    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:16,
        color:'black',
    },
    itemView:{
        borderWidth:1,
        borderRadius:8,
        padding:8,
        marginBottom:12,
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemTitle:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic',
    } 
});