import React,{Component} from "react";
import { View, Button, Text, StyleSheet, ScrollView, Alert } from "react-native";

export default class Main extends Component {
    
    constructor(){
        super();
        this.state={
            data: "RESULT",
        };
    }

    render(){
        return(
            <View style={style.root}>
                <Button title="fetch data from network" onPress={this.fetchData}></Button>

                <ScrollView style={style.scroll}>
                    <Text style={style.text}>{ this.state.data }</Text>
                </ScrollView>
            </View>
        );
    }

    fetchData=()=>{
        // //1. JavaScript의 XMLHttpRequest객체 사용하기
        // let xhr= new XMLHttpRequest();

        // //서버로부터의 응답결과를 받기 위한 콜백함수 등록
        // xhr.onreadystatechange= ()=>{
        //     if(xhr.readyState==4 && xhr.status==200){
        //         this.setState({data:xhr.responseText});
        //     }
        // }

        // xhr.open("GET","http://youtkddnjs.dothome.co.kr/aaa.txt");
        // xhr.send();

        //2. fetch()함수 : JQuery의 ajax()와 같은 역할을 하는 함수.[RN에 포함되어 있음]
        // 프로미스[promiss:약속] 문법 -비동기처리시에 처리가 끝날때 해야하는 작업을 하는 유용
        // .then()메소드 : 비동기 처리가 끝나면 자동으로 파라미터의 콜백함수가 실행되도록 약속한 개념.
        //fetch('http://youtkddnjs.dothome.co.kr/aaa.txt').then((response)=>{Alert.alert(response.status+"")});

        // //2.1 fetch()로 받은 응답결과를 글씨로 받아오기
        // fetch('http://youtkddnjs.dothome.co.kr/aaa.txt')
        // .then((response)=>{return response.text()})
        // .then((responseText)=>{this.setState({data:responseText})});

        //축약형
        // fetch('http://youtkddnjs.dothome.co.kr/aaa.txt')
        // .then(response=> response.text())
        // .then(responseText=>this.setState({data:responseText}));

        //fetch()는 예외상황도 손쉽게 제어함
        // fetch('http://youtkddnjs.dothome.co.kr/aaa.txt')
        // .then(response=>{
        //     aaa();  //error
        //     return response.text();
        // })
        // .then(a=>this.setState({data:a}))
        // .catch((error)=>{
        //     Alert.alert("오류발생"+error);
        // })

        //요즘 대부분의 서버 응답을 특정한 문자열포멧을 가짐 [csv, xml, json]
        //json을 파싱하기 [open API]
        //3. 우선 facebook에서 샘플로 제공하는 json파일 이용하기 [https://reactnative.dev/movies.json]
        //3.1 우선 json데이터를 글씨로 받아보기
        // fetch('https://reactnative.dev/movies.json')
        // .then(res=>res.text())
        // .then(resText=>this.setState({data:resText}))
        // .catch(error=>Alert.alert(error));

        // //3.2 json포멧을 파싱해서 객체로 응답받기
        // fetch('https://reactnative.dev/movies.json')
        // .then(res=>res.json())
        // .then(resObj=>{
        //     let title= resObj.title;
        //     let desc= resObj.description;
        //     let movies = resObj.movies;

        //     this.setState({data:title+"\n"+desc+"\n"+movies[0].title})
        // })
        // .catch(error=>Alert.alert(error));

        //4. 서버스크립트인 php에게 HTTP Request하기
        //4.1 [GET방식] - 주소뒤에 ?파라미터를 [키/벨류]쌍으로 추가하는 방식

        // let name = "sam";
        // let msg = "Hello world";
        // fetch(`http://kodo.dothome.co.kr/getMethod.php?name=${name}&msg=${msg}`)
        // .then(res=>res.text())
        // .then(resText=>this.setState({data:resText}))
        // .catch(error=>Alert.alert(error))

        //4.2 [POST방식] - 주소뒤에 붙이지 않기에 body데이터로 보내야 함
        // let title="Fetch TEST";
        // let message="패치함수의 POST방식을 테스트 합니다.";
        // //보낼데이터를 포멧팅
        // let data= `title=${title}&msg=${message}`;

        // fetch('http://kodo.dothome.co.kr/postMethod.php', {
        //     method:'POST',
        //     headers:{
        //         "Content-Type":"application/x-www-form-urlencoded"
        //     },
        //     body: data,
        // })
        // .then(res=>res.text().then(resText=>this.setState({data:resText})))
        // .catch(error=>Alert.alert(error));

        //4.3 요즘은 HTTP통신할때 데이터포멧을 json으로 하는것을 선호함.(요청/응답 모두)

        //서버로 보낼 데이터를 가진 객체
        let dataObj= {name:"sam", age:20, address:"seoul"};

        fetch('http://kodo.dothome.co.kr/jsonRequest.php',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(dataObj),
        })
        .then(res=>res.json())
        .then(resJson=>{            
            const name= resJson.name;
            const age= resJson.age;
            const address= resJson.address;

            this.setState({data:name+"\n"+age+"\n"+address});
        })
        .catch(error=>Alert.alert(error));

    }

}

const style= StyleSheet.create({
    root:{flex:1, padding:16}, 
    scroll:{marginTop:16, backgroundColor:'black'},
    text:{color:'white', padding:8,},
});