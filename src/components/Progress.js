import React from 'react';
import { Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const Progress = (props) => {
    let progress = 0;
    props.sins.map((item)=>{
        progress += item.circle;
    }) 

    return (
        <View style={{ alignItems: 'center' }}>
            <ProgressCircle
                percent={progress}
                radius={100}
                borderWidth={18}
                color="#e22d22"
                shadowColor="#999"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 45 }}>{`${progress}%`}</Text>
            </ProgressCircle>
        </View>
    )
}

export default Progress;