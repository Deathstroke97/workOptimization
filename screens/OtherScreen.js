import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Header } from 'react-native-elements'

class OtherScreen extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Text>OtherScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default OtherScreen;