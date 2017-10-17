import React from 'react';
import { Text } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home'
    };
    render() {
        return <Text>Home Component!</Text>;    
    }
}

export default Home;