import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Home extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='home'
                color={ tintColor }
             />
        ),
    };
    render() {
        return <Text>Home Component!</Text>;    
    }
}

export default Home;