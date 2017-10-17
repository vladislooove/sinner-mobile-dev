import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Calendar extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='date-range'
                color={ tintColor }
             />
        ),
    };

    render() {
        return <Text>Calendar Component!</Text>;    
    }
}

export default Calendar;