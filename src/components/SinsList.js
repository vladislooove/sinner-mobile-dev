import React from 'react';
import { Text, View } from 'react-native';

//import SinCard from './SinCard';

const SinsList = (props) => {
    if(props.sins.length){
        return (
            <View>
                {props.sins.map((sin)=>{
                    return (
                        <Text key={sin._id}> key={sin._id}
                                id={sin._id}
                                name={sin.name}
                                cetegory={sin.category}
                                circle={sin.circle}
                                createdAt={sin.createdAt}
                                additional={sin.additional}</Text>
                    )
                })}
            </View>
        )
    }
    else{
        return (
            <Text>Результатів не знайдено.</Text>
        )
    }
}

export default SinsList;