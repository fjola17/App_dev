import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './src/routes'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <Routes />
  );
}