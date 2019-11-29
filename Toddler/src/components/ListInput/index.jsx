import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { ControlledVerticalPicker } from 'react-native-color-picker';
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
  render(){
    return(
    <View>
        <Text>Name</Text>
        <TextInput placeholder="Temporary name"/>
        <Text>Description</Text>
        <TextInput placeholder="Temporary Description"/>
        <Text>Color</Text>
        <TouchableOpacity><Text>Submit the info</Text></TouchableOpacity>   
    </View>
    )
  }
}
export default ListInput;