import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import FirebaseLogin from "../components/FirebaseLogin";
import { AppLoading } from 'expo';
import _ from 'lodash';
import { connect } from 'react-redux';


// import * as actions from '../actions/index';

class AuthScreen extends Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false
    }

    state = {
        token: null,
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.userData)
    // }

    async componentWillMount() {
        let token = await AsyncStorage.getItem('token')
        
        if (token) {
            this.props.navigation.navigate('Tabs')
            this.setState({ token })
        }
        else {
            this.setState({ token: false })
        }
    }

    loginSuccess = async user => {
        console.log('loginSuccess: ', user)
        // this.props.logSuccess(user)
    }


    
    

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />
        }
        else if (!this.props.userData) {
            return (
                <FirebaseLogin login={user => this.loginSuccess(user)} navigation={this.props.navigation}/>
            );
        }
        
    }
}

const mapStateToProps = ({ auth }) => {
    return { userData: auth.data }
}

const mapDispathToProps = dispatch => {
    return {
        saveUser: (user) => dispatch({ type: 'success', payload: user }),
        clearUser: () => dispatch({type: 'clearUser'})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(AuthScreen);




