import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, ActivityIndicator, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';

import SinsList from '../components/SinsList';

import { loadSins } from '../actions/';

class CalendarSins extends React.Component {


    render() {
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 15, paddingRight: 15}} >
            </ScrollView>
        )
    }
}

export default CalendarSins;