import React from 'react';
import { Text, FlatList } from 'react-native';

import SinCard from './SinCard';

const SinsList = (props) => {
    if(props.sins.length){
        return (
            <FlatList
                data={props.sins}
                renderItem={(sin)=>{
                    return (
                        <SinCard 
                            key={sin._id}
                            id={sin._id}
                            name={sin.name}
                            cetegory={sin.category}
                            circle={sin.circle}
                            createdAt={sin.createdAt}
                            additional={sin.additional}/>
                    )
                }}
            />
        )
    }
    else{
        return (
            <Text>Результатів не знайдено.</Text>
        )
    }
}

export default SinsList;