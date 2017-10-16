import React from 'react';
import { Text } from 'react-native';

class Calendar extends React.Component {
    static navigationOptions = {
        title: 'Calendar'
    };
    render() {
        return <Text>Calendar Component!</Text>;    
    }
}

export default Calendar;