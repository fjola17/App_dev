import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data';
import List from '../../components/Lists';
const lists = data.lists;
// displays a single board

class Lists extends React.Component {
  state = {
    lists: lists,
    listId: -1,
  }

  componentDidMount(){
    const { navigation } = this.props;
    const id = navigation.getParam('ListId', '');
    console.log(id);
  }

  render(){
    const {lists} = this.state;
    console.log(lists);
    return (
      <View>
        <List lists={lists}/>
      </View>
    );
  }
};

export default Lists;
