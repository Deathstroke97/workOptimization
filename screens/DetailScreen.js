import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Header, SearchBar } from 'react-native-elements'
import MyIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';

class DetailScreen extends Component {
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

  export default DetailScreen;












              {/* <Header
                leftComponent={{ text: 'Projects', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
                rightComponent={{ icon: 'search', color: '#fff' }}
                containerStyle={{
                    backgroundColor: '#50acd3',
                    justifyContent: 'space-around',
                    marginTop: 0,
                }}
            /> */}