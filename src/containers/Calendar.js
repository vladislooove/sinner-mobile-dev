import React from 'react';
import { ScrollView, DatePickerAndroid, TouchableOpacity } from 'react-native';
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

    showDatePickerFrom = async (stateKey, options) => {
        try {
             await DatePickerAndroid.open(options);
        } 
        catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    };

    showDatePickerTo = async (stateKey, options) => {
        try {
             await DatePickerAndroid.open(options);
        } 
        catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    };

    render() {
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 5, paddingRight: 5}} >
                <Text h4 style={{ color: '#fff' }}> Перегляд по даті </Text>
                <TouchableOpacity
                    onPress={this.showDatePickerFrom.bind(this)}>
                    <Text>Date from</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.showDatePickerTo.bind(this)}>
                    <Text>Date To</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

export default Calendar;