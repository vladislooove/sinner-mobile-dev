import React from 'react';
import { Text } from 'react-native'
import { connect } from 'react-redux';
import { loadSinById, deleteSins } from '../actions/';

import SinInfo from '../components/SinInfo';

class SinsPage extends React.Component{
    render(){
        return (
            <Text> Hello </Text>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentSin: state.currentSin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSinById: (id) => {
            dispatch(loadSinById(id))
        },
        deleteSins: (id) => {
            dispatch(deleteSins(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinsPage);