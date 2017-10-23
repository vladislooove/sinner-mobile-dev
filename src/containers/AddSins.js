import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Icon, Text } from 'react-native-elements';

class AddSins extends React.Component {
    constructor(props) {
        super(props);
        this.form = {};
        this.state = {circle: 1};
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='add-circle'
                color={ tintColor }
             />
        ),
    };
    
    render() {
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 5, paddingRight: 5}} >
                <Text h4 style={{ color: '#fff' }}> Що Ви накоїли? </Text>
                    <TextInput 
                        style={{height: 50, color: '#fff', paddingLeft: 10, paddingRight: 10, borderColor: '#fff'}}
                        placeholder='Наприклад "збрехав"'
                        returnKeyType='next'
                        ref={(input) => this.form.input = input}
                        />
                    <TextInput 
                        style={{height: 90, color: '#fff', paddingLeft: 10, paddingRight: 10, borderColor: '#fff'}}
                        multiline={true}
                        numberOfLines={4}
                        placeholder='Коментар'
                        returnKeyType='next'
                        ref={(textarea) => this.form.textarea = textarea}/>
            </ScrollView>
        );    
    }
}

export default AddSins;