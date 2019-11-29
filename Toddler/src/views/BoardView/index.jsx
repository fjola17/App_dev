import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types'
import styles from './styles';
import { topHeaderBG, topHeaderText } from '../../styles/colors';
import List from '../../components/List';
import data from '../../resources/data';
import ListHeader from '../../components/ListHeader';
import ListModal from '../../components/ListModal';

class BoardView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', ''),
      headerStyle: {
        // backgroundColor: '#f4511e',
        backgroundColor: topHeaderBG,
      },
      // headerTintColor: '#fff',
      headerTintColor: topHeaderText,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('ListId', 0),
      list: data.lists,
      tasks: data.tasks,
      isModalOpen: false,
    };
  }
  componentDidMount(){
    const { navigation } = this.props;
    const id = navigation.getParam('ListId', '')
    this.setState({maxId: data.lists.length})
    console.log( 'id: ', id )
  }
  create(val){
    const { list } = this.state;
    val.id = this.state.maxId + 1;
    console.log(val);
    this.setState({list: [...list, val], isModalOpen: false});
  }
  delete(id){
    const {list} = this.state; 
    this.setState({
      list: list.filter(li => li.id !== id)
    });
  }
  render() {
    const { list, tasks } = this.state;
    data.lists = list;
    data.tasks = tasks
    
    return (
      <View style={styles.container}>
        <ListHeader onCreate={() => this.setState({ isModalOpen: true })}/>
        <TouchableOpacity onPress={() => this.delete(1)}><Text>Hard coded delete</Text></TouchableOpacity>
        <ListModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false })} listid={this.state.id} create={(bla) => this.create(bla)}/>
        <FlatList
          horizontal
          data={[...(list).filter((listi) => listi.boardId === this.state.id)]}
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

export default BoardView;
