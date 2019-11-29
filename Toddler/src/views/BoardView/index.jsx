import React from 'react';
import { FlatList, View } from 'react-native';
import { PropTypes } from 'prop-types'
import styles from './styles';
import List from '../../components/List';
import data from '../../resources/data';
import ListHeader from '../../components/ListHeader';
import ListModal from '../../components/ListModal';

class BoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data.lists,
      tasks: data.tasks,
      isModalOpen: false,
    };
  }
  create(){

  }

  render() {
    const { list, tasks } = this.state;
    const { id } = this.props;
    return (
      <View style={styles.container}>
        <ListHeader onCreate={() => this.setState({ isModalOpen: true })}/>
        <ListModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false })} list={{}} create={() => this.create()}/>
        <FlatList
          horizontal
          data={[...(list).filter((listi) => listi.boardId === 1)]}
          renderItem={({ item }) => (
            <List
              id={item.id}
              name={item.name}
              color={item.color}
              boardId={item.boardId}
              tasks={[...(tasks).filter((task) => task.listId === item.id)]}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

BoardView.propTypes = {
  id: PropTypes.number.isRequired,
}

export default BoardView;
