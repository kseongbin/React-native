import React, {Component} from "react";
import { View, Image, Button, TouchableHighlight, Alert, TouchableOpacity, TouchableNativeFeedback, Text, ScrollView, ImageBackground } from "react-native";

export default class MainComponent extends Component{

    //아주 특별한 변수(state)
    state={
        img:require("./Image/moana02.jpg"),
        imgs: [require("./Image/moana01.jpg"),
               require("./Image/moana02.jpg"),
               require("./Image/moana03.jpg"),
               require("./Image/moana04.jpg"),
               require("./Image/moana05.jpg"),
               {uri:"http://kim940840.dothome.co.kr/PickUpAsap/dakgalbi.jpg"},
               {uri:"http://kim940840.dothome.co.kr/PickUpAsap/steak.jpg"},
        ],
        imgIndex:0,
    }

    render(){
        return (
            <View style={{flex:1, padding:16,}}>
                <Image style={{width:100, height:100}} source={require("./Image/moana01.jpg")}></Image>
                
                {/* 네트워크상의 이미지 보이기 */}
                {/* 반드시 이미지사이즈 설정이 되어 있어야 함. 안하면 안보임 */}
                <Image style={{width:100, height:100}} source={{uri:"http://kim940840.dothome.co.kr/PickUpAsap/dakgalbi.jpg"}}></Image>

                {/* 버튼 클릭하여 이미지 변경하기 */}
                <Image style={{width:200, height:150}} source={this.state.img}></Image>
                <Button title="change image" onPress={()=>this.setState({img:require("./Image/moana03.jpg")})}></Button>

                {/* Image컴포넌트는 클릭하여 반응하기.. */}
                {/* RN에서는 몇몇 컴포넌트만 onPress에 반응함 */}
                {/* Button컴포넌트안에 Image컴포넌트를 넣을 수는 없음 */}
                {/* 그래서 클릭이 가능한 컴포넌트종류들(Touchable)을 사용함 */}
                {/* <TouchableOpacity onPress={this.clickImage} style={{width:208, padding:4}}>
                    <Image style={{width:200, height:150}} source={this.state.imgIndex}>
                    </Image>
                </TouchableOpacity> */}
                {/* 안드로이드의 클릭효과(물결무늬 효과) */}
                {/* <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={this.clickImage} style={{width:208, padding:4}}>
                    <Image style={{width:200, height:150}} source={require("./Image/moana04.jpg")}>
                    </Image>
                </TouchableNativeFeedback> */}

                {/* 여러뷰의 묶음을 터치하기(ex.리스트 아이템뷰 클릭) */}
                <TouchableOpacity onPress={this.clickImage}>
                    <View>
                        <Text>Image</Text>
                        <Image style={{width:200, height:100}} source={{uri:"http://kim940840.dothome.co.kr/PickUpAsap/steak.jpg"}}></Image>
                    </View>
                </TouchableOpacity>

                {/* 배경이미지 적용 */}
                {/* css로 못함. 배경이미지 컴포넌트 */}
                <View>
                    <ImageBackground source={{uri:"http://kim940840.dothome.co.kr/PickUpAsap/steak.jpg"}}>
                        <Text>Hello</Text>
                        <Text>Nice</Text>
                    </ImageBackground>   
                </View>

                {/* 이미지가 많으면 화면의 끝을 나감. 안보임 */}
                {/* 스크롤뷰 사용 */}
                <ScrollView>
                    <Image source={require('./Image/moana01.jpg')} style={imgStyle}></Image>
                </ScrollView>

                


            </View>
        );
    }

    clickImage=()=>{
        //Alert.alert("clicked!!");
        let index = this.state.imgIndex;
        index++;
        if(index>4) index=0;
        this.setState({imgIndex: index});
    }

}

const imgStyle={height:200, width:350, margin:16, borderRadius:8,}