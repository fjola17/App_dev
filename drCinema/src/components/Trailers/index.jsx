import React from 'react';
import { View, WebView, FlatList } from 'react-native';
import { connect } from 'react-redux';

const Trailers = ({ results }) => (
  <View>
    <FlatList
      data={results}
      renderItem={(itm) => (
        <WebView
          style={{ width: 350, height: 250 }}
          javaScriptEnabled
          source={{ uri: itm.item.url }}
        />
      )}
      keyExtractor={(itm) => itm.id.toString()}
    />
  </View>
);

const mapStateToProps = ({ upcoming }) => ({ upcoming });

export default connect(mapStateToProps)(Trailers);
