import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';
import Cinema from '../../components/Cinema';

class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Cinemas',
    };
  }

  render() {
    // alert(this.props.theaters.length);
    const { theaters } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>
          Cinemas screen!!!
        </Text>
        <FlatList
          data={theaters}
          renderItem={(item) => (
            <Cinema theater={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

// Cinemas.propTypes = {

// };
const mapStateToProps = ({ theaters }) => ({ theaters });

export default connect(mapStateToProps)(Cinemas);
