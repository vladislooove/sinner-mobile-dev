import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { enhance } from 'react-navigation-addons';

//components
import Home from './Home';
import Sins from './Sins';
import AddSins from './AddSins';
import Calendar from './Calendar';

const Tabbar = enhance(TabNavigator)({
    Home: { screen: Home },
    Sins: { screen: Sins },
    AddSins: { screen: AddSins },
    Calendar: { screen: Calendar }
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#e22d22',
        inactiveTintColor: '#fff',
        style: {
            backgroundColor: '#000',
            borderTopWidth: 1,
            borderTopColor: '#e22d22'
        },
        indicatorStyle: {
            backgroundColor: '#e22d22'
        }
    },
});

export default class Router extends React.Component {
    render() {
        return <Tabbar />;
    }
}
