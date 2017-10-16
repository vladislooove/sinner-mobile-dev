import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

//components
import Home from './Home';
import Sins from './Sins';
import AddSins from './AddSins';
import Calendar from './Calendar';

const Router = StackNavigator({
  Home: { screen: Home },
  Sins: { screen: Sins },
  AddSins: { screen: AddSins },
  Calendar: { screen: Calendar }
});

export default class Application extends React.Component {
  render() {
    return <Router />;
  }
}
