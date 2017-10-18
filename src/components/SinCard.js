import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';


const SinCard = (props) =>{
    let formatDate = (date) =>{
        if(date < 10){
            return `0${date}`
        }
        return date;
    }

    let createdAt = new Date(props.createdAt)
    let createdAtDay = formatDate(createdAt.getDate());
    let createdAtMonth = formatDate(createdAt.getMonth() + 1);
    let createdAtYear = createdAt.getFullYear();

    let createdAtHours = formatDate(createdAt.getHours());
    let createdAtMinutes = formatDate(createdAt.getMinutes());

    return (
        <Text style={{marginBottom: 10, backgroundColor: '#fff'}}
              key={props.id}>
              a
        </Text>
    )
}

export default SinCard;