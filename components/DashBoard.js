import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Reports from '../components/Reports';
import Projects from './Projects';
import { Platform } from 'expo-core';





class DashBoard extends Component {
    
    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.reportsStyle}>
                    <Reports reports={this.props.reports} navigation={this.props.navigation}/>
                </View>
                
                <View style={{flex: 3}}>
                <Text style={styles.textStyle}>Current Workflow</Text>
                    <Projects data={this.props.data} color={this.props.color}/>
                </View>
            </ScrollView>  
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin: 10,
        backgroundColor: '#d3d8e2'
    },
    reportsStyle: {
        flex: 1,
        
    },
    textStyle: {
        fontWeight: 'bold', 
        fontSize: 16, 
        color: '#868d99',
        marginLeft: 10,
        paddingLeft: 12,
        paddingTop: Platform.OS === 'android' ? 24: 0,
    },
    
})

export default DashBoard;















