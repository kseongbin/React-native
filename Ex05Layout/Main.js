import React, {Component} from 'react';
import {View} from 'react-native';

export default class Main extends Component{
    render(){
        return (
            // 컴포넌트는 1개의 뷰만 놓여질 수 있음. 그래서 최상의 뷰안에 자식뷰들을 여러개 놓도록 설계
            // RN은 기본적으로 css의 flex스타일이 적용되어 있음.
            // flex 스타일은 부모뷰의 설정에 따라 자식뷰들 배치가 결정되는 방식
            // 기본적으로 flex-direction(방향)은 'column'(수직) 배치임
            // <View>
            //     {/* 뷰의 사이즈는 width,height에 숫자나 %를 사용하여 정함, 또는 flex를 이용하여 정함 */}
            //     {/* 숫자의 기본단위는 dp임 */}
            //     <View style={{width:50, height:50, backgroundColor:"red"}}></View>
            //     <View style={{width:100, height:100, backgroundColor:"green"}}></View>
            //     <View style={{width:'70%', height:100, backgroundColor:"blue"}}></View>
            // </View>

            // RN에서는 뷰의 사이즈를 정할때 가급적 숫자보다는 비율로 정하는 것을 권장함
            // 디바이스별 해상도가 제각각이라서.. 비례적인 비율로 사이즈를 정해야 비슷한 사용자 UI가 구성됨
            // flex 속성값을 통해 자식뷰들의 높이를 1:2:4 의 비율크기로 만들어보기
            // flex는 높이,너비를 고정적으로 정한게 아니라. 배치방향에 따라 결정됨
            // 수직배치면.. flex는 높이값.. 수평배치면.. flex는 너비값(android의 layout-weight과 같은 역할)
            // 자식뷰들을 비율로 사이즈를 정하게 하려면 필수로 부모사이즈는 결정되어 있어야 함.
            // 최상위 뷰는 비교대상이 없기에 flex: 에 1이든 10이든 어떤 값이든 화면전체를 의미함.
            // <View style={{flex:1}}>
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, backgroundColor:'blue'}}></View>
            // </View>
            // flex는 배치방향의 비율크기임. 그럼 반대 사이즈는?
            // 기본적으로 반대사이즈를 결정하는 것은 align-items라는 속성으로 정함
            // align-items의 기본값이 strech 임. 그래서 너비가 100%로 보이는 것임.

            //배치 방향을 가로방향('row')으로 설정
            // <View style={{flex:1, flexDirection:'row'}}>
            //     {/* 가로방향이기에 flex는 너비를 의미함 */}
            //     {/* align-items의 기본값이 strech 이기에 높이가 100%로 됨. */}
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, height:200, backgroundColor:'blue'}}></View>
            // </View>

            //자식뷰의 사이즈를 숫자와 flex를 같이 사용하기
            // <View style={{flex:1}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>
            //     <View style={{height:100, backgroundColor:'green'}}></View>
            //     <View style={{flex:1, backgroundColor:'blue'}}></View>
            // </View>

            //자식뷰들의 정렬! justifyContent, align-items
            // <View style={{flex:1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
            //     <View style={{width:50 ,height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            // <View style={{flex:1, flexDirection:'row', justifyContent:"center", alignItems:"center"}}>
            //     <View style={{width:50 ,height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue', alignSelf:'flex-end'}}></View>
            // </View>

            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 수직 1:2 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 자식뷰들을 2:1 */}
                    <View style={{flex:2, backgroundColor:'red'}}>
                        {/* 뷰들을 겹치게 배치하기 */}
                        <View style={{width:50, height:50, backgroundColor:'white', position:'absolute', top:10, left:10}}></View>
                        <View style={{width:50, height:50, backgroundColor:'gray', position:'absolute', top:20, left:20}}></View>
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                    </View>
                </View>
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우 1:2 */}
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flex:1, backgroundColor:'blue'}}></View>
                        <View style={{flex:1, backgroundColor:'gray'}}></View>
                    </View>
                    <View style={{flex:2, backgroundColor:'brown'}}>
                        <View style={{width:50, height:50, backgroundColor:'white', position:'absolute', bottom:10, right:10}}></View>
                        <View style={{width:50, height:50, backgroundColor:'gray', position:'absolute', bottom:20, right:20}}></View>
                    </View>

                </View>

                <View style={{width:100, height:100, backgroundColor:'orange', position:'absolute', bottom:100, left:80, borderRadius:50}}></View>

            </View>
        );
    }
}