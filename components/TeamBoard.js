import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';




class TeamBoard extends Component {


    handlePress = member => {
      this.props.navigation.navigate('Detail', {
        data: member
      })
    }

    render() {
        return (
            this.props.team.map((member, index) => {
              if (member.name == undefined || member.surname === undefined) return
              return <TouchableOpacity  key={index} onPress={() => this.handlePress(member)}>
                {member.name !== undefined && <ListItem
                  key={index}
                  leftAvatar={{
                    source: { uri: member.avatar_url },
                    showEditButton: false,
                  }}
                  title={member.name + ' ' + member.surname}
                  subtitle={member.role}
                  chevron
              />}
              </TouchableOpacity>
            })
        )
    }
}

export default TeamBoard;