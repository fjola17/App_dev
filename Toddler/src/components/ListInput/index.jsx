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
        <TextInput placeholder="Temporary name" onChangeText={ (value) => this.setState({name:value}) } value={name}/>        
        <TouchableOpacity disabled={disabled}onPress={() => this.props.create(this.state)}>
          <Text style={{
            fontWeight: 'bold', 
            fontSize: 16, 
            color: 'white',
            paddingTop: 5,
            paddingBottom: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: 'green'}}>Submit the info</Text>  
        </TouchableOpacity>
        <ColorPicker onColorChange={(color) => this.onColorChange(fromHsv(color))}/>

    </View>
    )
  }
}
export default ListInput;