import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';


class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Cinemas',
      headerStyle: {
        backgroundColor: cinBlack,
      },
      headerTintColor: cinWhite,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      headerRight: () => (
        <MaterialCommunityIcons
          style={styles.iconHeader}
          name="death-star"
        />
      ),
    };
  }

  // Token:
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNDgxZGQ2MDJkMDc3OTYyOTVhNzYiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhseW51ciBNYWdudXNzb24iLCJlbWFpbCI6ImhseW51ci5tYWdudXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJobHludXJtIiwicGFzc3dvcmQiOiIkMmEkMDgkbEt4T3o1U0c4UVJCMUIwc2dNZTdpLmVpb00xWkdwM052ZHlNb25pclN5VFNGY0dOMTNROEsiLCJkb21haW4iOiJuYSIsIm1lc3NhZ2UiOiJTY2hvb2wgcHJvamVjdCBmb3IgSFIiLCJpYXQiOjE1NzU5MDA4OTAsImV4cCI6MTU3NTk4NzI5MH0.jT_MpRLBfN-nW6XbuJIR42WwFpeYonsbVS4gA-rwfg8

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>
          Cinemas screen!!!
        </Text>
        <Text style={styles.toolBarText}>
          Here be a header and list of cinemas in a flatlist
        </Text>
      </View>
    );
  }
}

// Cinemas.propTypes = {

// };


export default Cinemas;
