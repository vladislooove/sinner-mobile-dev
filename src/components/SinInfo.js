import React from 'react';
import { View, Image, Button } from 'react-native';
import { Text } from 'react-native-elements';

import { infernoData } from '../localData/data';

const circleImages = {
    1: require("../assets/images/circle/1.jpg"),
    2: require("../assets/images/circle/2.jpg"),
    3: require("../assets/images/circle/3.jpg"),
    4: require("../assets/images/circle/4.jpg"),
    5: require("../assets/images/circle/5.jpg"),
    6: require("../assets/images/circle/6.jpg"),
    7: require("../assets/images/circle/7.jpg"),
    8: require("../assets/images/circle/8.jpg"),
    9: require("../assets/images/circle/9.jpg")
}


const SinInfo = (props) => {
    var currentSinInfo;
    infernoData.map((item) => {
        if(item.circle == props.circle){
            currentSinInfo = item;
        }
    })
    if(currentSinInfo){
        return (
            <View style={{paddingTop: 30, }}>
                <Text h4 style={{ color: '#fff', marginBottom: 10 }}> {currentSinInfo.name} </Text>
                <Image
                    style={{width: '100%', height: 250, marginBottom: 10}}
                    source={circleImages[currentSinInfo.circle]}/>
                <Text h6 style={{ color: '#fff', marginBottom: 10 }}>
                    Коло: {currentSinInfo.circle}
                </Text>
                <Text h6 style={{ color: '#fff', marginBottom: 50 }}>
                    {currentSinInfo.description}
                </Text>
            </View>
        )
    }
    return null;
}

export default SinInfo;