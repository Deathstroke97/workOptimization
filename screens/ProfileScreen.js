import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';



const list = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    },
    
  ]

class DetailScreen extends Component {
    
    render() {
        const member = {
            name: 'Azat Saparbekov',
            role: 'Vice Chairman',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            totalBonus: '130 000 т',
            email: 'azat.saparbekov@gmail.com'
        }
        
        return (
            <View>
                <View style={styles.avatar}>
                    <Avatar
                        size="large"
                        title="LW"
                        rounded
                        showEditButton
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