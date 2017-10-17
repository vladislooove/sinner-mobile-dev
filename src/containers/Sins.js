import React from 'react';
import { Text } from 'react-native';

class Sins extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Sins'
    };
    render() {
        return <Text>Sins Component!</Text>;    
    }
}

export default Sins;