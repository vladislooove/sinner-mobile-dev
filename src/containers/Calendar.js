import React from 'react';
import { Text } from 'react-native';

class Calendar extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Timing'
    };
    render() {
        return <Text>Calendar Component!</Text>;    
    }
}

export default Calendar;