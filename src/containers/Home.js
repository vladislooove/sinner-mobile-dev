import React from 'react';
import { ScrollView } from 'react-native';
import { Icon, Text } from 'react-native-elements';

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
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 5, paddingRight: 5}} >
                <Text h4 style={{ color: '#fff' }}>Список ваших гріхів за сьогодні:</Text>
            </ScrollView>
        )
    }
}

export default Home;