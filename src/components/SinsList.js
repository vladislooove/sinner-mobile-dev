import React from 'react';
import { FlatList } from 'react-native';

import SinCard from './SinCard';

const SinsList = (props) => {
    if(props.sins.length){
        return (
            <FlatList>
                {props.sins.map((sin)=>{
                    return (
                        <SinCard key={sin._id}
                            id={sin._id}
                            name={sin.name}
                            cetegory={sin.category}
                            circle={sin.circle}
                            createdAt={sin.createdAt}
                            additional={sin.additional}/>
                    )
                })}
            </FlatList>
        )
    }
    else{
        return (
            <Text>Результатів не знайдено.</Text>
        )
    }
}

export default SinsList;