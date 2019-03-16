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
            this.props.team.map((member, index) => (
              <TouchableOpacity  key={index} onPress={() => this.handlePress(member)}>
                <ListItem
                  key={index}
                  leftAvatar={{
                    source: { uri: member.avatar_url },
                    showEditButton: false,
                  }}
                  title={member.name}
                  subtitle={member.role}
                  chevron
              />
              </TouchableOpacity>
            ))
        )
    }
}

export default TeamBoard;