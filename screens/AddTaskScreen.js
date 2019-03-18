import React, { Component } from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';

import { Hoshi } from 'react-native-textinput-effects';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'firebase'



const programmingLanguages = [
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'JavaScript',
      value: 'js',
    },
    {
      label: 'Python',
      value: 'python',
    },
    {
      label: 'Ruby',
      value: 'ruby',
    },
    {
      label: 'C#',
      value: 'csharp',
    },
    {
      label: 'C++',
      value: 'cpp',
    },
    {
      label: 'C',
      value: 'c',
    },
    {
      label: 'Go',
      value: 'go',
    }
  ];

const statuses = [
    {
        label: 'approved',
        value: 'approved'
    },
    {
        label: 'finished',
        value: 'finished',
    },
    {
        label: 'active',
        value: 'active'
    }
]

const status = [
    {
        label: 'new',
        value: 'new'
    }
]

class AddTaskScreen extends Component {

    static navigationOptions = {
        headerTitle: 'New Task'
    }


    state = {
        email: 'azat',
        name: 'azat',
        language: '',
        status: '',
        title: '',
        description: '',
        bonus: '',
    }
    updateValue = data => {
        this.setState(data)
    }

    handleChange = text => {
        this.setState({title: text})
    }

    handleChangeDes = (text) => {
        this.setState({description: text})
    }
    handleBonus = (text) => {
        this.setState({bonus: text})
    }


    handlePress = () => {
        var self = this;
            let uid = this.props.userData.uid
            uid = uid.replace(/(_)|(\.)|(-)/g, '');
            firebase.database().ref('users/' + uid ).set({
              name: 'Askar',
              surname: 'Abdiev',
            })
            var key = firebase.database().ref('users/' + `${uid}/tasks`).push().key
            console.log('key: ', key)
            firebase.database().ref('users/' + `${uid}/` + 'tasks/' + key).set({
                    title: 'sdsdsd',
                    description: 'fff',
                    bonus: 12000,
                    status: 'active'
            })
            .then(() => this.props.navigation.navigate('Home'));

          
    }

    render() {
        let fullNames = this.props.navigation.getParam('data');
        console.log('fullNames in add: ', this.props.fullNames)
        fullNames = fullNames.map(fullName => {
            return {
                label: fullName.name + ' ' + fullName.surname,
                value: fullName.name + ' ' + fullName.surname
            }
        })
        fullNames[0] = {
            name: this.props.userData.
        }
    
       
        return (
            <View style={ { backgroundColor: '#F9F7F6' }}>
                <Hoshi
                label={'Title'}
                onChangeText = {(text) => this.handleChange(text)}
                borderColor={'#b76c94'}
                maskColor={'#F9F7F6'}
                />
                <Hoshi
                label={'Decription'}
                maskColor={'#F9F7F6'}
                borderColor={'#7ac1ba'}
                onChangeText = {(text) => this.handleChangeDes(text)}
                />
                <Hoshi
                    label={'Bonus'}
                    maskColor={'#F9F7F6'}
                    borderColor={'#7ac1ba'}
                />
                <Picker
                    style={{left: 5}}
                    selectedValue={fullNames}
                    onValueChange={itemValue => this.setState({ name: itemValue })}>
                    {/* <Picker.Item  label={''} value={'askar@mailru'} /> */}
                    {fullNames.map((i, index) => {
                        return <Picker.Item key={index} label={i.label} value={i.value} />
                    })}
                </Picker>
                <Picker
                    style={{left: 5}}
                    selectedValue={this.state.status}
                    onValueChange={itemValue => this.setState({ status:  itemValue })}>
                    
                    <Picker.Item  label={'New Task'} value={'New Task'} />
                    
                </Picker>
                <Button
                     title="Add Task"
                     onPress={this.handlePress}
                     
                />
                </View>
        )
    }
}


const mapStateToProps = ({ auth }) => {
    return { 
        userData: auth.data,
        fullNames: auth.fullNames
    }
}

const mapDispathToProps = dispatch => {
    return {
        saveUser: (user) => dispatch({ type: 'success', payload: user }),
        clearUser: () => dispatch({type: 'clearUser'})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(AddTaskScreen);



const styles = StyleSheet.create({
    loginTextSection: {
       width: '100%',
       height: '30%',
    },
 
    loginButtonSection: {
       width: '100%',
       height: '30%',
       justifyContent: 'center',
       alignItems: 'center'
    },
 
    inputText: {
       marginLeft: '20%',
       width: '60%'
    },
 
    loginButton: {
      backgroundColor: 'blue',
      color: 'white'
    }
 })

