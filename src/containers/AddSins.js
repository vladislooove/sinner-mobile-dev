import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

class AddSins extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='add-circle'
                color={ tintColor }
             />
        ),
    };
    
    render() {
        return <Text>AddSins Component!</Text>;    
    }
}

export default AddSins;