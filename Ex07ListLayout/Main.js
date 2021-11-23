import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Main extends Component{
    render(){

        // 앱에서 가장 사용빈도가 높은 화면구조[리스트 형태]

        // 변수에 XML컴포넌트를 저장할 수도 있음.
        const aaa= <Text>Nice</Text>;

        // 컴포넌트그룹을 저장할 수도 있음.
        const bbb= <View style={{margin:16,}}>
                        <Text>Hello react native</Text>
                        <Button title="button"></Button>
                   </View>


        let datas= ["aa","bb","cc","dd"];

        //배열의 요소안에 XML컴포넌트 저장
        let arr=[aaa, bbb, bbb];

        return(
            <View style={style.root}>
                <Text style={style.title}>List Layout test</Text>
                
                {/* XML컴포넌트를 저장한 변수를 사용 */}
                {/* {aaa} */}
                {/* {aaa} */}
                {/* {aaa} */}

                {/* 뷰그룹을 가진 변수 사용 */}
                {/* {bbb} */}
                {/* {bbb} */}

                {/* XML컴포넌트를 리턴해주는 함수호출! */}
                {/* {this.showItemView()} */}

                {/* 함수에 파라미터값을 전달하면 다른값을 보여줄 수 있음 */}
                {/* {this.showItemView2("sam", "save", "green")} */}
                {/* {this.showItemView2("robin", "load", "black")} */}

                {/* JS는 배열요소값 출력을 편하게 할 수 있음 */}
                {/* JS는 배열의 이름을 출력하면 자동으로 요소값을 나열함 */}
                <Text> {datas} </Text>

                {/* XML컴포넌트를 요소로 가진 배열을 한방에 출력 */}
                {/* {arr} */}

                {/* 대부분의 경우 배열을 XML컴포넌트가 아니라 데이터를 가지고 있음 */}
                {/* 그래서 요소들 마다 데이터를 XML로 변화하는 코드가 필요함 */}
                {/* 배열의 .map()기능을 이용하여 새로운 배열을 리턴하여 화면에 표시. */}
                {/* 주의! 각 아이템마다 key속성값이 없으면 에러 경고창이 보임 */}
                {
                    datas.map( function(item, index, array){
                        return (
                            <View key={index} style={style.itemView}>
                                <Text>{item}</Text>
                            </View>
                        );
                    } )
                }

            </View>
        );
    }

    // 파라미터를 받고 XML컴포넌트를 리턴해주는 메소드
    showItemView2= (name, title, color)=>{
        return (
            <View style={{marginTop:8}}>
                <Text>Hello {name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        );
    }


    //XML컴포넌트를 리턴해주는 메소드
    showItemView(){
        return (
        <View style={{marginTop:8}}>
            <Text>Good world</Text>
            <Button title="Press me"></Button>
        </View>
        );
    }
}

//스타일 객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:'black',
    },
    itemView:{
        borderWidth:1,
        borderRadius:8,
        padding:16,
        margin:8,
    }
});