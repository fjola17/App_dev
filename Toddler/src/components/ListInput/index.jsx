import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker';

class ListInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: -1,
      name: '',
      color: '',
      boardId: -1,
    }
  }
  componentDidMount(){
    this.setState({boardId: this.props.listid});
  }
  onColorChange(color){
    this.setState({color:color})
  }
  render(){
    const {name} = this.state;
    console.log(this.state)
    let disabled = false;
    if(!name){
      disabled = true;
    }
    return(
    <View>
        <Text>Name</Text>
        <TouchableOpacity disabled={disabled}onPress={() => this.props.create(this.state)}>
          <Text>Submit the info</Text>  
        </TouchableOpacity>
        <TextInput placeholder="Temporary name" onChangeText={ (value) => this.setState({name:value}) } value={name}/>        
        <ColorPicker onColorChange={(color) => this.onColorChange(fromHsv(color))}/>

    </View>
    )
  }
}
export default ListInput;