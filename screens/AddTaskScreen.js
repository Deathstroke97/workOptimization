import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'




class AddTaskScreen extends Component {

    state = {
        email: 'azat',
        name: 'azat'
    }
    updateValue = data => {
        this.setState(data)
    }

    handleChange = text => {
        
    }

    render() {
        return (
            <View>
                {/* <FormLabel>Name</FormLabel>
                <FormInput onChangeText={(text) => this.handleChange(text)}/>
                <FormValidationMessage>Error message</FormValidationMessage> */}
                <TextInput value={this.state.email} onChangeText={email => this.updateValue({ email })} />

                <TextInput value={this.state.name} onChangeText={name => this.updateValue({ name })} />
            </View>
        )
    }
}

export default AddTaskScreen;