import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Sins extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='view-list'
                color={ tintColor }
             />
        ),
    };

    render() {
        return <Text>Sins Component!</Text>;    
    }
}

export default Sins;