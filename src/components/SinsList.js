import React from 'react';
import { Text, FlatList } from 'react-native';

import SinCard from './SinCard';

const SinsList = (props) => {
    if(props.sins.length){
        return (
            <FlatList
                data={props.sins}
                keyExtractor={sin => sin._id}
                renderItem={(sin)=>{
                    return (
                        <SinCard 
                            id={sin.item._id}
                            name={sin.item.name}
                            cetegory={sin.item.category}
                            circle={sin.item.circle}
                            createdAt={sin.item.createdAt}
                            additional={sin.item.additional}
                            navigation={props.navigation}/>
                    )
                }}
            />
        )
    }
    else{
        return (
            <Text style={{color: '#fff'}}>Результатів не знайдено.</Text>
        )
    }
}

export default SinsList;