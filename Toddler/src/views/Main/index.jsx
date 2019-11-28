import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Boards from '../../components/Board/Boards';
import BoardToolbar from '../../components/Board/BoardToolbar';
import InputModal from '../../components/Board/InputModal';
import data from '../../resources/data';

const board = data.boards;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoards: [],
      board,
      isModalOpen: false,
      availableBoard: {},
      hasSelectedImages: false
    };
  }

  onBoardLongPress(id) {
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      // board is inside of the list
      this.setState({
        selectedBoards: selectedBoards.filter((board) => board !== id)
      })
    } else {
      this.setState({
        selectedBoards: [...selectedBoards, id]
      });
    }
  }

  updateBoard() {
    const { selectedBoards } = this.state;
    // Get the most recent selected element from the list
    const currentBoard = selectedBoards[selectedBoards.length - 1];
    this.setState({ isModalOpen: true, availableBoard: board[currentBoard - 1] });
  }

  deleteMe() {
    const {selectedBoards} = this.state;
  }
// todo, only be able to select 1 board to update

  render() {
    const { selectedBoards, availableBoard } = this.state;
    console.log(availableBoard);
    return (
      <View style={styles.container}>
        <BoardToolbar onCreate={()=>this.setState({ isModalOpen: true, availableBoard: {} })} onUpdate={() => this.updateBoard()} onDelete={this.deleteMe()} hasSelectedImages={selectedBoards.length > 0} />
        <Boards
          boards={this.state.board} onBoardLongPress={(id) => this.onBoardLongPress(id)}
          selectedBoards={selectedBoards}
        />
        <InputModal isOpen={this.state.isModalOpen} closeModal={() => this.setState({ isModalOpen: false })} board={availableBoard} />
      </View>
    );
  }
}

export default Main;
