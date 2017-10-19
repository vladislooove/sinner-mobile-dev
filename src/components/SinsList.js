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
                            key={sin.index}
                            id={sin.item_id}
                            name={sin.item.name}
                            cetegory={sin.item.category}
                            circle={sin.item.circle}
                            createdAt={sin.item.createdAt}
                            additional={sin.item.additional}/>
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