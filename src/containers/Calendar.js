import React from 'react';
import { ScrollView } from 'react-native';
import { Icon, Text } from 'react-native-elements';

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
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 5, paddingRight: 5}} >
                <Text h4 style={{ color: '#fff' }}> Перегляд по даті </Text>
            </ScrollView>
        )
    }
}

export default Calendar;