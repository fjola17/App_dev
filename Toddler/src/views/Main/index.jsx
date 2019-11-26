import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Boards from '../../components/Board/Boards';
import BoardToolbar from '../../components/Board/BoardToolbar';
import InputModal from '../../components/Board/InputModal';

class Main extends React.Component {
  state = {
    selectedBoards : [],
    isModalOpen: false,
    availableBoard: {}
  }
  onLongPress(name){
    if(name != undefined){
      console.log("lala")
    }
    
  }
  deleteMe(){
    console.log("Hello");
  }
//todo, only be able to select 1 board to update
  render(){
    return (
      <View style={ styles.container }>
        <BoardToolbar onCreate={()=>this.setState({isModalOpen:true})} onUpdate={()=>this.setState({isModalOpen:true})} onDelete={this.deleteMe()}/>
        <Boards />
        <InputModal isOpen={this.state.isModalOpen} closeModal={ () => this.setState({ isModalOpen: false }) } board={this.state.availableBoard}/>
      </View>
    );
  }  
};

export default Main;
