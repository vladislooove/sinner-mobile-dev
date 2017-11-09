import React from 'react';
import { Text, View, Image, Button } from 'react-native';

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
        <View style={{marginBottom: 30, backgroundColor: '#000', borderWidth: 1, borderColor: '#e22d22', position: 'relative'}}>
            <Image
                style={{width: '100%', height: 200}}
                source={circleImages[props.circle]}/>

            <View style={{ position: 'absolute', top: 10, left: -1, backgroundColor: '#333', paddingTop: 5, paddingRight: 5, paddingBottom: 5, paddingLeft: 5 }}>
                <Text style={{ color: '#fff' }}>
                    {`${createdAtDay}.${createdAtMonth}.${createdAtYear}`}
                </Text>
                <Text style={{ color: '#fff' }}>
                    {`${createdAtHours}:${createdAtMinutes}`}
                </Text>
            </View>

            <View style={{paddingTop:10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10}}>
                <Text style={{color: '#fff', fontSize: 18, marginBottom: 10 }}>{props.name.toUpperCase()}</Text>
                <Text style={{color: '#fff', fontSize: 16, marginBottom: 10 }}>{props.additional}</Text>
                <Button
                    onPress={() => props.navigation.navigate('SinsPage', { id: props.id })}
                    color='#e22d22'
                    title='Переглянути' />
            </View>

        </View>
    )
}

export default SinCard;