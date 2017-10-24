import React from 'react';
import { ScrollView, TextInput, Picker, Button } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import { connect } from 'react-redux';

import { addSins } from '../actions/';

import SinInfo from '../components/SinInfo';

import { infernoData } from '../localData/data';

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

    addSins(event){
        let name = this.form.input._lastNativeText;
        let circle = this.form.select.props.selectedValue;
        let category = this.form.select.props.children[circle - 1].props.label;
        let additional = this.form.textarea._lastNativeText;
        console.log(name, circle, category, additional)
        this.props.addSins(name, category, circle, additional)
    }

    
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
                    <Picker
                        style={{color: '#fff'}}
                        selectedValue={this.state.circle}
                        onValueChange={(itemValue) => this.setState({circle: itemValue})}
                        ref={(select) => this.form.select = select}>
                        
                        {infernoData.map((item)=>{
                            return ( 
                                <Picker.Item 
                                    key={item.circle}
                                    label={item.name} 
                                    value={item.circle} />
                            )}
                        )}
                    </Picker>
                    <Button
                        color='#e22d22'
                        title='Додати'
                        onPress={this.addSins.bind(this)} />
                    <SinInfo circle={this.state.circle} />
            </ScrollView>
        );    
    }
}

const mapStateToProps = state => {
    return {
        sins: state.sins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSins: (name, category, circle, additional) => {
            dispatch(addSins(name, category, circle, additional))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddSins);