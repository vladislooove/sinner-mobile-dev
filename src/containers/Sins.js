import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import SinsList from '../components/SinsList';

import { loadSins } from '../actions/';

class Sins extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='view-list'
                color={ tintColor }
             />
        ),
    };
    componentDidMount() {
        this.props.navigation.addListener('focus', this.load.bind(this));
    }

    componentWillUnmount() {
        this.props.navigation.removeListener('focus', this.load.bind(this));
    }

    load(){
        this.props.loadSins()
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 5, paddingRight: 5}} >
                <Text h4 style={{ color: '#fff' }}> Список ваших гріхів: </Text>
                <SinsList sins={this.props.sins} />
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        sins: state.sins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSins: () => {
            dispatch(loadSins())
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sins);