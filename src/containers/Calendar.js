import React from 'react';
import { ScrollView, DatePickerAndroid, TouchableOpacity, Button } from 'react-native';
import { Text } from 'react-native-elements';

class Calendar extends React.Component {

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
                    onPress={this.showDatePickerFrom.bind(this, 'max', {
                        maxDate: new Date(),
                        mode: 'calendar'
                    })}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, paddingTop: 10, paddingBottom: 10}}>Обрати початкову дату</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.showDatePickerTo.bind(this, 'max', {
                        maxDate: new Date(),
                        mode: 'calendar'
                    })}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, paddingTop: 10, paddingBottom: 10}}>Обрати кінцеву дату</Text>
                </TouchableOpacity>
                <Button
                    onPress={() => { console.log(this)} }
                    color='#e22d22'
                    title='Переглянути' />

            </ScrollView>
        )
    }
}

export default Calendar;