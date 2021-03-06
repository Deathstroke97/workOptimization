import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Projects from '../components/Projects';



class NewProjectsScreen extends Component {
       
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: navigation.getParam('data')[0].attachedTo.type,
        };
      };

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data')
        const color = navigation.getParam('color')
        return (
            <ScrollView style={styles.container}>
                <Projects reports={data} color={color}/>
            </ScrollView>  
        )
    }
}

export default NewProjectsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin: 10,
        backgroundColor: '#d3d8e2'
    },
})