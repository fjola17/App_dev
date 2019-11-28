import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskDetails = ({ id, name, description, isSelected }) => (
  <TouchableOpacity onLongPress={() => onBoardLongPress(id)} style={styles.container} >
      {
        isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} /> : <></>
      }
      <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      {/*
      <Image style={styles.image} source={{ uri: photo }} />
      */}
      <Text style={styles.imageName}>{name}</Text>
      <Text style={styles.imageDetail}>{description}</Text>
      <Text>{isSelected ? 'selected' : 'not selected'}</Text>
    </View>
  </TouchableOpacity>
);


export default TaskDetails;
