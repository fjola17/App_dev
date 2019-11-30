import React from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types'
import styles from './styles';
import { topHeaderBG, topHeaderText } from '../../styles/colors';
import data from '../../resources/data';
import ListHeader from '../../components/ListHeader';
import ListModal from '../../components/ListModal';
import ListView from '../../components/ListView';

class BoardView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', ''),
      headerStyle: {
        backgroundColor: topHeaderBG,
      },
      headerTintColor: topHeaderText,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('BoardId', 0),
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
  remove(id){
    const {list} = this.state; 
    this.setState({
      list: list.filter(li => li.id !== id)
    });
  }
  render() {
    const { id, list, tasks } = this.state;
    data.lists = list;
    
    return (
      <View style={styles.container}>
        <ListHeader onCreate={() => this.setState({ isModalOpen: true })}/>
        <ListModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false })} listid={this.state.id} create={(bla) => this.create(bla)}/>
        <ListView id={id} list={list} tasks={tasks} remove={(value)=>this.remove(value)}/>
      </View>
    );
  }
}

export default BoardView;
