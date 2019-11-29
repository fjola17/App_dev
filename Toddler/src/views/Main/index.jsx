import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Boards from '../../components/Board/Boards';
import BoardToolbar from '../../components/Board/BoardToolbar';
import InputModal from '../../components/Board/BoardModal';
import data from '../../resources/data';
import {deleteMany} from '../../services/dbService';

const board = data.boards;

class Main extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Toddler Board',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  state = {
    selectedBoards : [],
    board: board,
    isModalOpen: false,
    availableBoard: {},
    hasSelectedImages: false,
    maxlenght: board.length,
  }

  onBoardLongPress(id){
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      // board is inside of the list
      this.setState({
        selectedBoards: selectedBoards.filter((board) => board !== id)
      })
    } else {
      this.setState({
        selectedBoards: [ ...selectedBoards, id ]
      });
    }
  }
  create(data){
    const {board, selectedBoards} = this.state;
    if(data.id !== -1){
      let newboard = board;
      newboard[data.id -1] = data;
      this.setState({ isModalOpen: false, board: newboard, selectedBoards : selectedBoards.filter(board => board !== data.id) });
    }
    else{
      data.id = this.state.maxlenght + 1;
      this.setState({ isModalOpen: false, board: [...board, data], maxlenght: data.id });
    }
  }
  clearSelected(){
    this.setState({selectedBoards: []});
  }

  updateBoard() {
    const { selectedBoards } = this.state;
    // Get the most recent selected element from the list
    const currentBoard = selectedBoards[selectedBoards.length - 1];
    this.setState({ isModalOpen:true, availableBoard: board[currentBoard - 1]});
  }
  deleteMe(){
    let {selectedBoards, board} = this.state;
    this.setState({
      selectedBoards: [],
      board: board.filter(img => selectedBoards.indexOf(img.id) === -1),
    })
  }
// todo, only be able to select 1 board to update

  render() {
    const { selectedBoards, availableBoard } = this.state;
    return (
      <View style={ styles.container }>
        <BoardToolbar onCreate={()=>this.setState({isModalOpen:true, availableBoard: {}})} onUpdate={()=>this.updateBoard()} onDelete={() => this.deleteMe()} hasSelectedImages={selectedBoards.length > 0} />
        <Boards
          boards={this.state.board} onBoardLongPress={(id) => this.onBoardLongPress(id)}
          selectedBoards={selectedBoards} />
        <InputModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false }) } board={availableBoard} create={(board) => this.create(board)}/>
      </View>
    );
  }
}

export default Main;
