import React from 'react';
import { View, WebView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const Trailers = ({ results }) => (
  <View style={styles.container}>
    <FlatList
      data={results}
      renderItem={(itm) => (
        <View style={styles.padBox}>
          <WebView
            style={styles.video}
            javaScriptEnabled
            source={{ uri: itm.item.url }}
          />
        </View>
      )}
      keyExtractor={(itm) => itm.id.toString()}
    />
  </View>
);

const mapStateToProps = ({ upcoming }) => ({ upcoming });

export default connect(mapStateToProps)(Trailers);
