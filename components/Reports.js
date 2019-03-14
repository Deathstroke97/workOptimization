import React, { Component } from 'react';
import { View, Text,  StyleSheet  } from 'react-native';
import { ListItem } from 'react-native-elements'


class Reports extends Component {
    render() {
        return(
            <View style={styles.main}>
             {this.props.reports.map((report, index) => {
                 if (report.text === 'Active') return;
                return <ListItem key={index} 
                    title={report.text}
                    containerStyle={styles.container}
                    rightTitle='See All'
                    rightTitleStyle={{color: '#59bce5'}}
                >
                </ListItem>
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