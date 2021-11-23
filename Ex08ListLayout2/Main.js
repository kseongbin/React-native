import React,{Component} from "react";
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default class Main extends Component{

    //화면에 영향을 미치는 특별한 변수
    state={
        datas:[
            {name:"sam", message:"Hello world", Image:require("./image/moana01.jpg")},
            {name:"robin", message:"Nice world", Image:require("./image/moana02.jpg")},
            {name:"hong", message:"Good world", Image:require("./image/moana03.jpg")},
            {name:"kim", message:"See world", Image:require("./image/moana04.jpg")},
            {name:"rosa", message:"Take the world", Image:require("./image/moana05.jpg")},
            {name:"sam", message:"Hello world", Image:require("./image/moana01.jpg")},
            {name:"robin", message:"Nice world", Image:require("./image/moana02.jpg")},
            {name:"hong", message:"Good world", Image:require("./image/moana03.jpg")},
            {name:"kim", message:"See world", Image:require("./image/moana04.jpg")},
            {name:"rosa", message:"Take the world", Image:require("./image/moana05.jpg")},
        ],
    }

    render(){
        return(
            <ScrollView style={style.root}>
                {
                    this.state.datas.map( (item, index)=>{
                        return (
                            <TouchableOpacity key={index} style={style.item} onPress={()=> { this.clickItem(index); }}>
                                <Image source={item.Image} style={style.itemImg}></Image>
                                <View>
                                    <Text style={style.itemName}>{item.name}</Text>
                                    <Text style={style.itemMsg}>{item.message}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } )
                }
            </ScrollView>
        );
    }

    clickItem=(index)=>{
        Alert.alert('clicked item:'+ index);
    }

}

const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
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
        marginRight: 8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    },
});