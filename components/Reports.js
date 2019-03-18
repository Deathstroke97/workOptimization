import React, { Component } from 'react';
import { View, Text,  StyleSheet, TouchableOpacity  } from 'react-native';
import { ListItem } from 'react-native-elements'


class Reports extends Component {
    
    handlePress = (type, data, color) => {
        if (type === 'Finished') {
            this.props.navigation.navigate('Finished', {
                data: data,
                color: color
            })
        }
        else if (type === 'Approved') {
            this.props.navigation.navigate('Approved', {
                data: data,
                color: color
            }) 
        }
        else {
            this.props.navigation.navigate('New', {
                data: data,
                color: color
            })
        }
    }

    render() {
        return(
            <View style={styles.main}>
             {this.props.newReports.map((report, index) => {
                 
                 if (report && report.length > 0) {
                return <ListItem key={index} 
                    title={report[0].attachedTo.type}
                    containerStyle={styles.container}
                    // rightTitle='See All'
                    rightElement={
                    <TouchableOpacity onPress={() => this.handlePress(report[0].status, report, report[0].attachedTo.color)}>
                        <Text style={{color: '#59bce5'}}>See All</Text>
                    </TouchableOpacity>}
                    

                >
                </ListItem>
                 }
            })
             }
            </View>
        )
    }
}

export default Reports;



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
    },
    main: { 
        margin: 10,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { height: 0, width: 0 },
    }
        
    ,
  });



  