import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types'
import data from '../../resources/data';

import BoardView from '../BoardView';
import ListModal from '../../components/ListModal';
import ListHeader from '../../components/ListHeader';
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
    const id = navigation.getParam('ListId', '')
    this.setState({listId: id})
  }
  create(){

  }

  render(){
    const {lists, tasks, listId} = this.state;
    console.log(this.state)
    console.log(lists);
    return (
      <View>
        <ListHeader onCreate={() => this.setState({isModalOpen: true})}/>
        <BoardView lists={lists} tasks={tasks} id={listId}/>
        <ListModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false })} list={this.state.currentList} create={() => this.create()}/>
      </View>
    );
  }
};

Lists.propTypes = {
  listId: PropTypes.number.isRequired,
}

export default Lists;
