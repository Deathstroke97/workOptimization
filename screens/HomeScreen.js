import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, LayoutAnimation, TouchableOpacity, Image } from 'react-native';
import { Header, SearchBar } from 'react-native-elements'

import MyIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import DashBoard from '../components/DashBoard';
import TeamBoard from '../components/TeamBoard.js';



const reports = [
    {text: 'Recent Completed', data: [
        {
            id: '1',
            title: 'Building Website',
            attachedTo: 'Azat Saparbekov',
            status: 'completed',
            bonus: '12 000 т',
        },
        {
            id: '2',
            title: 'SEO Optimization',
            attachedTo: 'Almas Maksutov',
            status: 'completed',
            bonus: '11 000 т',
        },
        {   
            id: '3',
            title: 'Registration in Azure DevOps',
            attachedTo: 'Didar Olzhasov',
            status: 'completed',
            bonus: '20 000 т', 
        },
        {   
            id: '4',
            title: 'UI/UX Design for new Mobile App',
            attachedTo: 'Didar Olzhasov',
            status: 'completed',
            bonus: '14 000 т', 
        }
    ],
    color: 'green'
}, 
    
    {text: 'New', data: [
        {
            id: '1',
            title: 'Building Website',
            attachedTo: 'Azat Saparbekov',
            status: 'new',
            bonus: '12 000 т',
        },
        {
            id: '2',
            title: 'SEO Optimization',
            attachedTo: 'Almas Maksutov',
            status: 'new',
            bonus: '11 000 т',
        },
        {   
            id: '3',
            title: 'Registration in Azure DevOps',
            attachedTo: 'Didar Olzhasov',
            status: 'new',
            bonus: '20 000 т', 
        },
        {   
            id: '4',
            title: 'UI/UX Design for new Mobile App',
            attachedTo: 'Didar Olzhasov',
            status: 'new',
            bonus: '14 000 т', 
        }
    ],
    color: '#7b8391'
    },
    {text: 'Active', data: [
        {
            id: '1',
            title: 'Building Website',
            attachedTo: 'Azat Saparbekov',
            status: 'completed',
            bonus: '12 000 т',
        },
        {
            id: '2',
            title: 'SEO Optimization',
            attachedTo: 'Almas Maksutov',
            status: 'completed',
            bonus: '11 000 т',
        },
        {   
            id: '3',
            title: 'Registration in Azure DevOps',
            attachedTo: 'Didar Olzhasov',
            status: 'completed',
            bonus: '20 000 т', 
        },
        {   
            id: '4',
            title: 'UI/UX Design for new Mobile App',
            attachedTo: 'Didar Olzhasov',
            status: 'completed',
            bonus: '14 000 т', 
        }

    ],
    color: '#47B17C'    
},
]

const team = [
    { 
        name: 'Mika Aukenova',
        role: 'Vice President',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        totalBonus: '250 000 т',
        email: 'mika.aukenove@mail.ru'
    },
    {
        name: 'Azat Saparbekov',
        role: 'Vice Chairman',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        totalBonus: '130 000 т',
        email: 'azat.saparbekov@gmail.com'
    },
    {
        name: 'Amanda Martin',
        role: 'CEO',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        totalBonus: '10 000 т',
        email: 'amanda_22@gmail.com'
    },
    {
        name: 'Almas Maksutov',
        role: 'Software Engineer',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        totalBonus: '20 000 т',
        email: 'almas.maksutov@gmail.com'
    },
    {
        name: 'Mika Aukenova',
        role: 'Software Engineer',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        totalBonus: '50 000 т',
        email: 'mika.aukenova@gmail.com'
    },




]



class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        search: '',
        showSearchBar: false,
        filtered: reports[0].data
    };

    componentDidMount() {
        this.reportData = reports.map(report => {
            return report.data
        })
    }
    
    searchFilterFunction = text => {    
        console.log('state: ', this.state.filtered)

        const newData = this.state.filtered.filter(item => {  
        
        console.log('item name: ', item)    
        const itemData = `${item.attachedTo.toUpperCase()}   
        ${item.title.toUpperCase()}`;
        const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;    
        });    
        this.setState({ filtered: newData });  
    };
    
    
    onClick = () => {
        LayoutAnimation.easeInEaseOut()
        let { showSearchBar } = this.state;
        this.setState({
          showSearchBar: !showSearchBar,
          filtered: reports[0].data,
        });


        
    }

    test = () => {
        this.onClick()
    }

    renderRightComponent = () => (
        <View style={{flexDirection: 'row'}}>
            <MyIcon name="ios-search" size={23} onPress={this.test} style={{marginRight:15}} />
        
        </View>
    )
   
    render() {
        console.log('color: ', reports[2].color)
        let header = <Header
                        leftComponent={<Text style={styles.headerTextStyle}>Projects</Text>}
                        rightComponent={this.renderRightComponent()}
                        containerStyle={styles.headerContainerStyle}
                    />

        if (this.state.showSearchBar) {
                header = <View style={{flex: 1, flexDirection: 'row', marginTop: 26, backgroundColor: '#fff', }}>
                        <View style={{flex: 1, marginTop: 20}}>
                            <MyIcon name="ios-search" size={23} onPress={this.test} style={{marginLeft: 30,}} />
                        </View>
                        
                        <View style={{flex: 5,  marginTop: 20}}>
                        <TextInput
                            style={{height: 23, paddingLeft: 10, fontSize: 18}}
                            placeholder="Search ..."
                            onChangeText={text => this.searchFilterFunction(text) }
                        />
                        </View>
                    </View>
           
        }
        return (
            <View style={{flex: 1}}>
                {header}
                <ScrollableTabView
                    style={{marginTop: 20, flex: 9}}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar />}
                >
                    <DashBoard tabLabel='DASHBOARD' 
                        reports={reports} 
                        data={this.state.filtered} 
                        color={reports[2].color}
                        navigation={this.props.navigation}></DashBoard>
                    <TeamBoard tabLabel="MY TEAM" team={team} navigation={this.props.navigation}></TeamBoard>
                </ScrollableTabView>
                <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('AddTask')}>
                         <Image style={styles.myAddBtn} source={require('../img/plus-3.png')} />
                </TouchableOpacity>


            
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
    headerTextStyle: {
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: 16, 
        left: 0,
        paddingLeft: 5
    },
    headerContainerStyle: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    search: {
        flex: 1, 
        flexDirection: 'row',  
        marginTop: 10 
    },
    touch: {
        position: "absolute",
        bottom: 16,
        right: 25,
        
    },
    myAddBtn: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 30,
    
    },
  });

  export default HomeScreen;

