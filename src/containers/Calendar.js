import React from 'react';
import { ScrollView, DatePickerAndroid, TouchableOpacity, Button, View } from 'react-native';
import { Text } from 'react-native-elements';

import { connect } from 'react-redux';

import { loadSinsByDate } from '../actions/'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: {
                year: null,
                month: null,
                day: null,
                isSetted: false
            },
            dateTo: {
                year: null,
                month: null,
                day: null,
                isSetted: false
            }
        };
    }

    showDatePickerFrom = async (stateKey, options) => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({
                    dateFrom: {
                        year: year,
                        month: month + 1,
                        day: day,
                        isSetted: true
                    }
                })
            }
        } 
        catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    showDatePickerTo = async (stateKey, options) => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({
                    dateTo: {
                        year: year,
                        month: month + 1,
                        day: day,
                        isSetted: true
                    }
                })
            }
        

        } 
        catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    navigateToCalendarSins(){
        this.props.navigation.navigate('CalendarSins');
        this.props.loadSinsByDate(this.state.dateFrom.day, this.state.dateFrom.month, this.state.dateFrom.year, this.state.dateTo.day, this.state.dateTo.month, this.state.dateTo.year);        
    }
    render() {
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 5, paddingRight: 5}} >
                <Text h4 style={{ color: '#fff' }}> Перегляд по даті </Text>
                <TouchableOpacity
                    onPress={this.showDatePickerFrom.bind(this, 'max', {
                        maxDate: new Date(),
                        mode: 'calendar'
                    })}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, paddingTop: 10, paddingBottom: 10}}>
                        {this.state.dateFrom.isSetted ? `Початкова дата: ${this.state.dateFrom.day}.${this.state.dateFrom.month}.${this.state.dateFrom.year}` 
                        : 'Обрати початкову дату'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.showDatePickerTo.bind(this, 'max', {
                        maxDate: new Date(),
                        mode: 'calendar'
                    })}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, paddingTop: 10, paddingBottom: 10}}>
                        {this.state.dateTo.isSetted ? `Кінцева дата: ${this.state.dateTo.day}.${this.state.dateTo.month}.${this.state.dateTo.year}` 
                        : 'Обрати кінцеву дату' }
                    </Text>
                </TouchableOpacity>
                <View style={{paddingLeft: 5, paddingRight: 5, paddingTop: 10}}>
                    <Button
                        disabled={ (this.state.dateFrom.isSetted && this.state.dateTo.isSetted) ? false : true }
                        onPress={this.navigateToCalendarSins.bind(this)}                    
                        color='#e22d22'
                        title='Переглянути' />
                </View>
            </ScrollView>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSinsByDate: (dayFrom, monthFrom, yearFrom, dayTill, monthTill, yearTill) => {
            dispatch(loadSinsByDate(dayFrom, monthFrom, yearFrom, dayTill, monthTill, yearTill))
        },
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Calendar);
