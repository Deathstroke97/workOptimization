import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createMaterialTopTabNavigator } from 'react-navigation'
import MyIcon from 'react-native-vector-icons/Ionicons';
import { Icon, Header } from 'react-native-elements'
import CustomHeader from './components/CustomHeader';


import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { withNavigation } from 'react-navigation';





class App extends Component {
  render() {  
    return (
      <SafeAreaView style={{flex: 1}}>
        <BottomTabNavigator />
      </SafeAreaView>
    )
  }
}


const BottomTabNavigator = createMaterialBottomTabNavigator({
  home: {
    screen: HomeScreen,
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