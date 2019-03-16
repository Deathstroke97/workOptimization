import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class ConfigProjectScreen extends Component {
    render() {
        return (
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={someFunction}/>
                <FormValidationMessage>Error message</FormValidationMessage>
            </View>
        )
    }
}

export default ConfigProjectScreen