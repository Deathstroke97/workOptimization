import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, SearchBar } from 'react-native-elements'

import MyIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import DashBoard from '../components/DashBoard';


const reports = [
    {text: 'Completed', data: []}, 
    {text: 'Active', data: [
        {
            id: '1',
            title: 'Building Website',
            attachedTo: 'Azat Saparbekov',
            status: 'active',
            bonus: '12 000 т',
        },
        {
            id: '2',
            title: 'SEO Optimization',
            attachedTo: 'Almas Maksutov',
            status: 'active',
            bonus: '11 000 т',
        },
        {   
            id: '3',
            title: 'Registration in Azure DevOps',
            attachedTo: 'Didar Olzhasov',
            status: 'active',
            bonus: '20 000 т', 
        },
        {   
            id: '4',
            title: 'UI/UX Design for new Mobile App',
            attachedTo: 'Didar Olzhasov',
            status: 'active',
            bonus: '14 000 т', 
        }

    ]},
    {text: 'New', data: []}
]

class HomeScreen extends Component {
    state = {
        search: '',
        showSearchBar: false,
      };
    
    updateSearch = search => {
        this.setState({ search });
    };

    onClick = () => {
        let { showSearchBar } = this.state;
        this.setState({
          showSearchBar: !showSearchBar,
        });
        
    }

    test = () => {
        this.onClick()
    }

    renderRightComponent = () => (
        <View style={{flexDirection: 'row'}}>
            <MyIcon name="ios-search" size={23} onPress={this.test} style={{marginRight:15}} />
            <Icon name="dots-three-vertical" size={20} color="black" />
        </View>
    )
   
    render() {
        let header = <React.Fragment>
                        <Header
                            leftComponent={<Text style={{color: 'black', fontWeight: 'bold', fontSize: 18, left: 0}}>Projects</Text>}
                            rightComponent={this.renderRightComponent()}
                            containerStyle={{
                                backgroundColor: 'white',
                                justifyContent: 'space-around',
                            }}
                           
                            leftContainerStyle={{
                                
                            }}
                        />

                        
                    </React.Fragment>
        
        if (this.state.showSearchBar) {
            header = <React.Fragment>
                        <SearchBar
                            placeholder="Search projects..."
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            lightTheme
                            onBlur={() => this.setState({ showSearchBar: false })}
                            clearIcon={this.state.showSearchBar}
                            ref={search => this.search = search}
                            containerStyle={{
                                backgroundColor: 'white',
                            
                            }}

                         />
                        
                    </React.Fragment>
        }
        return (
            <View style={{flex: 1, flexDirection: 'column'}} 
                onStartShouldSetResponder={() => this.setState({showSearchBar: false})}>
                {header}
                <ScrollableTabView
                    style={{marginTop: 20}}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar />}
                >
                    <DashBoard tabLabel='DASHBOARD' reports={reports}></DashBoard>
                    <Text tabLabel='MY TEAM'>favorite</Text>
                    
                </ScrollableTabView>


            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default HomeScreen;

