import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, AsyncStorage } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import MyIcon from 'react-native-vector-icons/Ionicons';
import { Icon, Header } from 'react-native-elements'
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import RecentProjectsScreen from './screens/RecentProjectsScreen';
import NewProjectsScreen from './screens/NewProjectsScreen';
import DetailScreen from './screens/DetailScreen';
import ConfigProjectScreen from './screens/ConfigProjectScreen'
import AddTaskScreen from './screens/AddTaskScreen';
import AuthScreen from './screens/AuthScreen';
import FinishedScreen from './screens/FinishedScreen';
import ApprovedScreen from './screens/ApprovedScreen';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
import store from './store'


class App extends Component {
  
  componentWillMount = async ()=> {
    

       
    
      
    
    const firebaseConfig = {
      apiKey: "AIzaSyBBFuWePEDP72cxPH1YwJnNs--s25Aj7y8",
      authDomain: "workoptimizer-b1f62.firebaseapp.com",
      databaseURL: "https://workoptimizer-b1f62.firebaseio.com",
      projectId: "workoptimizer-b1f62",
      storageBucket: "workoptimizer-b1f62.appspot.com",
      messagingSenderId: "526692315458"
  };
    firebase.initializeApp(firebaseConfig);
    // Firebase.initializeApp(firebaseConfig)
  }

  render() {  
    return (
      <Provider store={store} >
      <SafeAreaView style={{flex: 1}}>
        {/* <BottomTabNavigator /> */}
        <AppNavigator />
      </SafeAreaView>
      </Provider>
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
  },
  Finished: {
    screen: FinishedScreen
  },
  Approved: {
    screen: ApprovedScreen
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

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  Tabs: BottomTabNavigator

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