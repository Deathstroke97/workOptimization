import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, LayoutAnimation, TouchableOpacity, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import { Header, SearchBar } from 'react-native-elements'

import MyIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import DashBoard from '../components/DashBoard';
import TeamBoard from '../components/TeamBoard.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as firebase from 'firebase';


const reports = [
    {
        text: 'Approved', data: []
    },

    {text: 'Finished', data: [
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
        filtered: reports[3].data,
        active: null,
        finished: null,
        approved: null,
        NEW: null,
        fullNames: []
    };

    componentWillReceiveProps(nextProps) {

        if (nextProps.mainData) {
            let active = [];
            let finished = [];
            let approved = [];
            let NEW = []

            let name;
            let surname;
            
            const DATA = {...nextProps.mainData}

            let fullNames = []
           
            for (let employee in DATA) {
                name = DATA[employee].name + ' ';
                surname = DATA[employee].surname
                let obj = {
                    name,
                    surname
                }
                if (surname !== "undefined" || surname !== undefined) {
                    console.log('surname: ', surname)
                    fullNames[fullNames.length++] = obj
                }
                
                for (let tasks in DATA[employee]) {
                    
                    for (let task in DATA[employee][tasks]) {
                        
                        if (typeof DATA[employee][tasks][task] === 'object' &&
                                (DATA[employee][tasks][task] !== null || DATA[employee][tasks][task] !== undefined)
                            ) {
                            console.log('task-',DATA[employee][tasks][task] )
                            switch (DATA[employee][tasks][task].status) {
                                case 'finished' :
                                    name = DATA[employee].name + ' ';
                                    surname = DATA[employee].surname
                                    DATA[employee][tasks][task]['attachedTo'] = {}
                                    DATA[employee][tasks][task]['attachedTo'].fullName = `${name}${surname}`
                                    DATA[employee][tasks][task]['attachedTo'].color= '#4286f4'
                                    DATA[employee][tasks][task]['attachedTo'].type = 'Finished'
                                    finished[finished.length++] = DATA[employee][tasks][task]

                                    break;
                                case 'active': 
                                    name = DATA[employee].name + ' ';
                                    surname = DATA[employee].surname
                                    DATA[employee][tasks][task]['attachedTo'] = {}
                                    DATA[employee][tasks][task]['attachedTo'].fullName = `${name}${surname}`
                                    DATA[employee][tasks][task]['attachedTo'].type = 'Active'
                                    active[active.length++] = DATA[employee][tasks][task]
                                    break;
                                case 'approved': 
                                    name = DATA[employee].name + ' ';
                                    surname = DATA[employee].surname
                                    DATA[employee][tasks][task]['attachedTo'] = {}
                                    DATA[employee][tasks][task]['attachedTo'].fullName = `${name}${surname}`
                                    DATA[employee][tasks][task]['attachedTo'].color= 'green'
                                    DATA[employee][tasks][task]['attachedTo'].type = 'Approved'
                                    approved[approved.length++] = DATA[employee][tasks][task]
                                    break;
                                case 'new':
                                    name = DATA[employee].name + ' ';
                                    surname = DATA[employee].surname
                                    DATA[employee][tasks][task]['attachedTo'] = {}
                                    DATA[employee][tasks][task]['attachedTo'].fullName = `${name}${surname}`
                                    DATA[employee][tasks][task]['attachedTo'].color= '#8f9fba'
                                    DATA[employee][tasks][task]['attachedTo'].type = 'New'
                                    NEW[NEW.length++] = DATA[employee][tasks][task]
                                default: {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            // console.log('fullNames: ', fullNames.slice(1))
            // this.props.writeFullNames(fullNames)
            // console.log('active: ', active)
            // console.log('finished: ', finished)
            // console.log('approved: ', approved)
            // console.log('new: ', NEW)
            console.log('fullnames++++++++++: ', fullNames)
            this.setState({
                active,
                finished,
                approved,
                NEW,
                fullNames: fullNames
            }, () => console.log('MMA', this.state.fullNames))
            
        }

        if (nextProps.userData) {
            let uid = nextProps.userData.uid
        
            if (uid === "azat.saparbekov@gmail.com") {
                uid = uid.replace(/(_)|(\.)|(-)/g, '');
                console.log('uid: ', uid)
                firebase.database().ref(`users/${uid}` ).set({
                    manager: true,
                    name: '',
                    surname: '',
                    tasks: '',

                });
            }
            else {
                uid = uid.replace(/(_)|(\.)|(-)/g, '');
                firebase.database().ref('users/' + uid ).set({
                    manager: false,
                }); 
            }


        }
        
    }


    async componentWillMount() {
        var self = this;
        firebase.database().ref('/users').once('value').then(function(snapshot) {
            console.log('snapshot: ', snapshot.val())
            self.props.saveData(snapshot.val())
        })

        // firebase.database().ref('users/' + 'askar2002@mailru').on('value', (snapshot) => {
        //     const highscore = snapshot.val().manager;
        //     console.log("New high score: " + highscore);
        //   });

        let user = await AsyncStorage.getItem('user')
        this.props.saveUser(JSON.parse(user))
    }

    

    async componentDidMount() {

        
        // const ref = Firebase.database().ref('users');
        // ref.on('value', snapshot => {
        //     const val = snapshot.val();
        //     console.log(val);
        // });
          


        this.reportData = reports.map(report => {
            return report.data
        })
        AsyncStorage.getItem('token')
        .then((res) => console.log('token async: ', res))
        .then(() => AsyncStorage.getItem)

        
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
          filtered: reports[3].data,
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

        if (!this.props.mainData) {
            return (
            <View style={[styles.containerIndicator, styles.horizontalIndicator]}>
                <ActivityIndicator size="large" color="#0000ff"  />
            </View>
            )
        }



        
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
                        approved={this.state.approved}
                        finished={this.state.finished}
                        NEW={this.state.NEW}
                        reports={reports} 
                        data={this.state.filtered} 
                        active={this.state.active}
                        color={reports[3].color}
                        navigation={this.props.navigation}></DashBoard>
                    <TeamBoard tabLabel="MY TEAM" team={this.state.fullNames} navigation={this.props.navigation} ></TeamBoard>
                </ScrollableTabView>
                <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('AddTask', {
                    data: this.state.fullNames,
                    
                })}>
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
    containerIndicator: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontalIndicator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
  });


const mapStateToProps = ({ auth }) => {
    return { 
        userData: auth.data,
        mainData: auth.mainData
    }
}

const mapDispathToProps = dispatch => {
    return {
        saveUser: (user) => dispatch({ type: 'success', payload: user }),
        saveData: (data) => dispatch({ type: 'main_data_loaded', payload: data }),
        // writeFullNames: (fullNames) => dispatch({ type: 'writeFullNames', payload: fullNames })
    }
}

export default connect(mapStateToProps, mapDispathToProps)(HomeScreen);

  

