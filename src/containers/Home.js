import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import SinsList from '../components/SinsList';
import Progress from '../components/Progress';

import { loadTodaySins } from '../actions/';

class Home extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='home'
                color={ tintColor }
             />
        ),
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', this.load.bind(this));
    }

    componentWillUnmount() {
        this.props.navigation.removeListener('focus', this.load.bind(this));
    }

    load(){
        this.props.loadTodaySins()
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 5, paddingRight: 5}} >
                <Text h4 style={{ color: '#fff', paddingBottom: 30 }}>Ви відійшли від Бога на:</Text>
                <Progress  sins={this.props.todaySins}/>
                <Text h4 style={{ color: '#fff', paddingBottom: 30, paddingTop: 30 }}>Список ваших гріхів за сьогодні:</Text>
                { this.props.isLoading ? 
                    <ActivityIndicator size='large' /> : 
                    <SinsList 
                        sins={this.props.todaySins}
                        navigation={this.props.navigation} /> }
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        todaySins: state.todaySins,
        isLoading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTodaySins: () =>{
            dispatch(loadTodaySins())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);