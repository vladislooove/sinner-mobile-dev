import React from 'react';
import { ScrollView, ActivityIndicator, View, Button } from 'react-native'
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { loadSinById, deleteSins } from '../actions/';

import SinInfo from '../components/SinInfo';

class SinsPage extends React.Component{
    componentWillMount(){
        this.props.loadSinById(this.props.navigation.state.params.id)
    }

    deleteSins(id){
        this.props.deleteSins(id);
        this.props.navigation.navigate('Sins')
    }

    render(){
        let formatDate = (date) =>{
            if(date < 10){
                return `0${date}`
            }
            return date;
        }

        let createdAt = new Date(this.props.currentSin.createdAt)
        let createdAtDay = formatDate(createdAt.getDay());
        let createdAtMonth = formatDate(createdAt.getMonth() + 1);
        let createdAtYear = createdAt.getFullYear();

        let createdAtHours = formatDate(createdAt.getHours());
        let createdAtMinutes = formatDate(createdAt.getMinutes());

        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 15, paddingRight: 15}} >

                { this.props.isLoading ? 
                    <ActivityIndicator size='large' /> : 
                    <View>
                        <Text h4 style={{ color: '#fff', paddingBottom: 15 }}>
                            {this.props.currentSin.name}    
                        </Text>
                        <Text h5 style={{ color: '#fff', paddingBottom: 10 }}>
                            {this.props.currentSin.additional}    
                        </Text>
                        <Text h5 style={{ color: '#fff' }}>
                            {`${createdAtDay}.${createdAtMonth}.${createdAtYear}`}   
                        </Text>
                        <Text h5 style={{ color: '#fff', paddingBottom: 5 }}>
                             {`${createdAtHours}:${createdAtMinutes}`}
                        </Text>
                        <Button
                            onPress={this.deleteSins.bind(this, this.props.currentSin._id)}
                            color='#e22d22'
                            title='Я покаявся' />
                        <SinInfo circle={this.props.currentSin.circle} />
                    </View>
                }
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentSin: state.currentSin,
        isLoading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSinById: (id) => {
            dispatch(loadSinById(id))
        },
        deleteSins: (id) => {
            dispatch(deleteSins(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinsPage);