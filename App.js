import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import MyIcon from 'react-native-vector-icons/Ionicons';
import { Icon, Header } from 'react-native-elements'
import { createStackNavigator } from "react-navigation";

import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import RecentProjectsScreen from './screens/RecentProjectsScreen';
import NewProjectsScreen from './screens/NewProjectsScreen';
import DetailScreen from './screens/DetailScreen';
import ConfigProjectScreen from './screens/ConfigProjectScreen'
import AddTaskScreen from './screens/AddTaskScreen';

class App extends Component {
  render() {  
    return (
      <SafeAreaView style={{flex: 1}}>
        <BottomTabNavigator />
      </SafeAreaView>
    )
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Recent: {
    screen: RecentProjectsScreen,
  },
  New: {
    screen: NewProjectsScreen
  },
  Detail: {
    screen: DetailScreen,
  },
  Config: {
    screen: ConfigProjectScreen
  },
  AddTask: {
    screen: AddTaskScreen
  }
  
}, {
  initialRouteName: 'Home',
  
});


const BottomTabNavigator = createMaterialBottomTabNavigator({
  home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <MyIcon name="ios-home" color={tintColor} size={24} />
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

export default App;






































// BottomTabNavigator.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];

//   console.log('routeName: ', routeName)

//   return {
//     headerTitle,
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });