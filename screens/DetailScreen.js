import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';


class DetailScreen extends Component {
    render() {
        const member = this.props.navigation.getParam('data')
        
        return (
            <View>
         
                <View style={styles.avatar}>
                    <Avatar
                        size="large"
                        title="LW"
                        rounded
                        source={{
                            uri: member.avatar_url,
                        }}
                        
                    />
                </View>
                
                <ListItem
                    title={'Name'}
                    rightElement={<Text>{member.name}</Text>}
                />
                <ListItem
                    title={'Role'}
                    rightElement={<Text>{member.role}</Text>}
                />
                <ListItem
                    title={'Total Bonus'}
                    rightElement={<Text style={{color: 'green'}}>{member.totalBonus}</Text>}
                />
                <ListItem
                    title={'E-mail'}
                    rightElement={<Text>{member.email}</Text>}
                />

                </View>
          
        )
    }
}

export default DetailScreen;

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10
    }
})