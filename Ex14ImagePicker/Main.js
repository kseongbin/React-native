import React,{Component} from 'react';
import { View, Image, Button, Text, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class Main extends Component{

    state={
        img: {uri:"https://cdn.pixabay.com/photo/2020/12/19/16/41/fox-5844892_960_720.jpg"},
    }

    render(){
        return(
            <View style={{flex:1, padding:16,}}>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button title="show camera app" onPress={this.showCamera} color="green"></Button>
                    <Button title="show photo app" onPress={this.showPhoto}></Button>
                </View>

                <Text style={{margin:8}}>{this.state.img.uri}</Text>
                <Image source={this.state.img} style={{flex:1, marginTop:8, resizeMode:'contain'}}></Image>

            </View>
        );
    }

    showCamera= () =>{

        //옵션객체
        const options={
            mediaType:'photo',
            cameraType:'back',
            saveToPhotos: true,
            quality: 1.0,
            videoQuality: 'high'
        };

        //카메라 앱 실행
        launchCamera(options, (response)=>{
            if(response.didCancel){
                Alert.alert('cancel', 'user cancelled camera')
            }else if(response.errorMessage){
                Alert.alert('camera error', response.errorMessage);
            }else{
                //이곳에 왔다면 카메라앱에서 이미지가 잘 선택된 것임.
                Alert.alert('성공', response.assets[0].uri);

                //선택된 이미지 uri 문자열 경로를 Image의 source객체로 만들기
                const src= {uri:response.assets[0].uri}

                //이미지컴포넌트가 보여주는 state 변수값을 변경
                this.setState({img:src});
            }
        });
    }

    showPhoto= ()=>{

        //옵션객체
        const options={
            mediaType:'photo',
        }

        launchImageLibrary(options, (response)=>{
            if(response.didCancel) Alert.alert('취소', '선택을 취소했습니다.');
            else if(response.errorMessage) Alert.alert('오류', response.errorMessage);
            else{
                const src={uri: response.assets[0].uri};
                this.setState({img:src});
            }
        });

    }

}