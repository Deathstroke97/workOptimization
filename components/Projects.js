import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';



const {height, width} = Dimensions.get('window');

class Projects extends Component {

    _keyExtractor = (item, index) => item.description;


    renderItem = (item, index) => {
        
        return (
            <View key={index} style={[styles.box, {backgroundColor: this.props.color}]}>
            <View style={styles.content}>
                <View style={styles.contentDetail}>
                    <Text style={styles.descTitle}>Title - </Text>
                    <Text style={styles.description}>{item.title}</Text>
                </View>
                <View style={styles.contentDetail}>
                    <Text style={styles.descTitle}>Attached to - </Text>
                    <Text style={styles.description}>{item.attachedTo.fullName}</Text>
                </View>
                <View style={[styles.contentDetail, {position: 'absolute', top: 50}]}>
                    <Text style={styles.descTitle}>Bonus - </Text>
                    <Text style={styles.description}>{item.bonus}</Text>
                </View>
                
                </View>
            </View>
        )
    }

    render() {
        // console.log('active projects: ', this.props.active)
        const data = this.props.active ? this.props.active : this.props.reports
        return(
            <View style={styles.container}>
                <FlatList 
                    keyExtractor={this._keyExtractor}
                    data={data}
                    // extraData={this.props.data}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    box: {
        height: 150,
        marginRight: 40,
        marginTop: 10,
        // backgroundColor: '#47B17C',   //#66BB6A
        marginBottom: 20,
        borderRadius: 10,
        right: 20,
        left: 20,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { height: 0, width: 0 },
    },
    container: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'stretch' 
    },
    content: {
        position: 'absolute',
        left: 20,
        top: 20,
    },
    contentDetail: {
        flexDirection: 'row'
    },
    descTitle: {
        color: '#a3d8bd',
    },
    description: {
        color: '#fff'
    }
    
})
export default Projects;