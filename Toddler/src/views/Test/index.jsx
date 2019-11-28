import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Tasks from '../../components/Task/Tasks';
//import BoardToolbar from '../../components/Board/BoardToolbar';
import InputModal from '../../components/Board/InputModal';
import data from '../../resources/data';

const board = data.tasks;

class Test extends React.Component {
  state = {
    selectedBoards : [],
    board: board,
    isModalOpen: false,
    availableBoard: {}
  }
  onBoardLongPress(id){
    const { selectedBoards } = this.state;
    if(selectedBoards.indexOf(id) !== -1){
      //board is inside of the list
      this.setState({
        selectedBoards : selectedBoards.filter(board => board !== id)
      })
    }else{
      this.setState({
        selectedBoards: [ ...selectedBoards, id ]
      })
    }
  }
  deleteMe(){
    const {selectedBoards} = this.state;
  }
//todo, only be able to select 1 board to update
  render(){
    const { selectedBoards } = this.state;
    return (
      <View style={ styles.container }>
        {/*
        <BoardToolbar onCreate={()=>this.setState({isModalOpen:true})} onUpdate={()=>this.setState({isModalOpen:true})} onDelete={this.deleteMe()} />
        */}
        <Tasks
          boards={this.state.board} onBoardLongPress={(id) => this.onBoardLongPress(id)}
          selectedBoards={selectedBoards} />
        <InputModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false }) } board={this.state.availableBoard}/>
      </View>
    );
  }
};

export default Test;
