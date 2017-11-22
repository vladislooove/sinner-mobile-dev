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
                <Text h4 style={{ color: '#fff', paddingBottom: 30 }}> Перегляд по вибраній даті: </Text>
                { this.props.isLoading ? 
                    <ActivityIndicator size='large' /> : 
                    <SinsList 
                        sins={this.props.calendarSins}
                        navigation={this.props.navigation}
                         /> }

            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        calendarSins: state.calendarSins,
        isLoading: state.loading
    }
}

export default connect(
    mapStateToProps,
    null
)(CalendarSins)