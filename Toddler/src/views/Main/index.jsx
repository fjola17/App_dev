import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { topHeaderBG, topHeaderText } from '../../styles/colors';
import Boards from '../../components/Board/Boards';
import BoardToolbar from '../../components/Board/BoardToolbar';
import InputModal from '../../components/Board/BoardModal';
import data from '../../resources/data';


class Main extends React.Component {
  static navigationOptions() {
    return {
      title: 'Toddler Board',
      headerStyle: {
        backgroundColor: topHeaderBG,
      },
      headerTintColor: topHeaderText,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedBoards: [],
      board: data.boards,
      isModalOpen: false,
      availableBoard: {},
      // hasSelectedImages: false,
      maxlenght: data.boards.length,
    };
  }

  onBoardLongPress(id) {
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      // board is inside of the list
      this.setState({
        selectedBoards: selectedBoards.filter((bo) => bo !== id),
      });
    } else {
      this.setState({
        selectedBoards: [...selectedBoards, id],
      });
    }
  }

  create(dat) {
    const { board, selectedBoards, maxlenght } = this.state;
    if (dat.id !== -1) {
      const newboard = board;
      newboard[dat.id - 1] = dat;
      const filter = selectedBoards.filter((brd) => brd !== data.id);
      this.setState({ isModalOpen: false, board: newboard, selectedBoards: filter });
    } else {
      data.id = maxlenght + 1;
      this.setState({ isModalOpen: false, board: [...board, dat], maxlenght: data.id });
    }
  }

  updateBoard() {
    const { selectedBoards, board } = this.state;
    // Get the most recent selected element from the list
    const currentBoard = selectedBoards[selectedBoards.length - 1];
    this.setState({ isModalOpen: true, availableBoard: board[currentBoard - 1] });
  }

  deleteMe() {
    const { selectedBoards, board } = this.state;
    this.setState({
      selectedBoards: [],
      board: board.filter((img) => selectedBoards.indexOf(img.id) === -1),
    });
  }

  render() {
    const { selectedBoards, availableBoard, board, isModalOpen } = this.state;
    return (
      <View style={styles.container}>
        <BoardToolbar
          onCreate={() => this.setState({ isModalOpen: true, availableBoard: {} })}
          onUpdate={() => this.updateBoard()}
          onDelete={() => this.deleteMe()}
          hasSelectedImages={selectedBoards.length > 0}
        />
        <Boards
          boards={board}
          onBoardLongPress={(id) => this.onBoardLongPress(id)}
          selectedBoards={selectedBoards}
        />
        <InputModal
          isOpen={isModalOpen}
          closeModal={() => this.setState({ isModalOpen: false })}
          board={availableBoard}
          create={(aboard) => this.create(aboard)}
        />
      </View>
    );
  }
}

export default Main;
