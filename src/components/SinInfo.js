import React from 'react';
import { Text, View, Image, Button } from 'react-native';

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
            <Text>
                {currentSinInfo.circle}
            </Text>
        )
    }
    return null;
}

export default SinInfo;