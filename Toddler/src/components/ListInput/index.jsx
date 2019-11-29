import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
class ListInput extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    id: -1,
    name: '',
    color: '#000000',
    boardId: -1,

  }
  componentDidMount(){
    this.setState({boardId: this.props.listid});
  }
  onColorChange(color){
    this.setState({color: color})
  }

  render(){
    const {name, color} = this.state;
    let disabled = false;
    if(!name){
      disabled = true;
    }
    return(
    <View>
        <Text>Name</Text>
        <TextInput placeholder="Temporary name" onChangeText={ (value) => this.setState({name:value}) } value={name}/>
        <TouchableOpacity disabled={disabled}onPress={() => this.props.create(this.state)}>
          <Text>Submit the info</Text>  
        </TouchableOpacity>
        <ColorPicker onColorSelected={(color) => this.onColorChange(color)} />

    </View>
    )
  }
}
export default ListInput;