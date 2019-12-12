import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
// import { cinBlack, cinWhite } from '../../styles/colors';
import Cinema from '../../components/Cinema';
import sortIcelandicAlphabeticOrder from '../../services/sortIcelandicAlphabetService';

class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      // title: 'Cinemas',
      headerTitle: 'Home',
    };
  }



  render() {
    // alert(this.props.theaters.length);
    const { theaters } = this.props;
    return (
      <View style={styles.container}>
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

const mapStateToProps = ({ theaters }) => {
  // eslint-disable-next-line no-nested-ternary
  const sorted = theaters.sort((a, b) => sortIcelandicAlphabeticOrder(a.name, b.name));
  return { theaters: sorted };
};

export default connect(mapStateToProps)(Cinemas);
