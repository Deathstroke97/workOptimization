import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';




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

class ProfileScreen extends Component {
    
    handlePress = async() => {
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('token')
        this.props.clearUser()
        this.props.navigation.navigate('Auth')
        
    }

    render() {
        console.log('redux: ', this.props.userData)
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
                    rightElement={<Text>{this.props.userData.displayName}</Text>}
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
                    rightElement={<Text>{this.props.userData.email}</Text>}
                />
                <Button
                    title="Log out"
                    color="red"
                    onPress={this.handlePress}
                />

                </View>
          
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { userData: auth.data }
}

const mapDispathToProps = dispatch => {
    return {
        saveUser: (user) => dispatch({ type: 'success', payload: user }),
        clearUser: () => dispatch({type: 'clearUser'})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProfileScreen);





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