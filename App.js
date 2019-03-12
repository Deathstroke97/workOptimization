import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createMaterialTopTabNavigator } from 'react-navigation'
import MyIcon from 'react-native-vector-icons/Ionicons';
import { Icon, Header } from 'react-native-elements'
import CustomHeader from './components/CustomHeader';

import HomeScreen  from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen';
import OtherScreen from './screens/OtherScreen';
import DetailScreen from './screens/DetailScreen';





class App extends Component {

  render() {
   
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          leftComponent={{ text: 'Projects', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
          rightComponent={{ icon: 'search', color: '#fff' }}
          containerStyle={{
            backgroundColor: '#50acd3',
            justifyContent: 'space-around',
          }}
          />
        <BottomTabNavigator />
      </SafeAreaView>
    )
  }
}

const TopTabNavigator = createMaterialTopTabNavigator({
  home: {
    screen: OtherScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <MyIcon name="ios-home" color={tintColor} size={24 } />
      ),
    }
  },
  detail: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: 'Detail',
      tabBarIcon: ({ tintColor }) => (
        <MyIcon name="ios-person" color={tintColor} size={24 } />
      )
    }
  }, 

}, {
  initialRouteName: 'home',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    
    style: {
      backgroundColor: 'white'
    },
    indicatorStyle: {
      backgroundColor: '#50acd3'
    }
  },


})

const BottomTabNavigator = createMaterialBottomTabNavigator({
  home: {
    screen: TopTabNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <MyIcon name="ios-home" color={tintColor} size={24 } />
      )
    }
  },
  profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <MyIcon name="ios-person" color={tintColor} size={24} />
      )
    }
  }, 
}, {
  initialRouteName: 'home',
  activeTintColor: '#50acd3',
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
