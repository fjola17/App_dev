import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data';
import List from '../../components/Lists';
import ListModal from '../../components/ListModal';
const lists = data.lists;
// displays a single board

class Lists extends React.Component {
  state = {
    lists: lists,
    listId: -1,
    isModalOpen: false,
    currentList: {}
  }

  componentDidMount(){
    const { navigation } = this.props;
    const id = navigation.getParam('ListId', '');
    console.log(id);
  }
  create(){

  }

  render(){
    const {lists} = this.state;
    console.log(lists);
    return (
      <View>
        <Text>Create</Text>
        <Text>Delete</Text>
        <Text>Update</Text>
        <List lists={lists}/>
        <ListModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false })} list={this.state.currentList} create={() => this.create()}/>
      </View>
    );
  }
};

export default Lists;
