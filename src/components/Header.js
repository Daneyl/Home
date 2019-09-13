import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Layout} from 'react-native-ui-kitten';
import colors from '../assets/colors';
import {BackIcon} from '../assets/Icons';

const Header = ({title, hasBack = false, onPressBack}) => {
  return (
    <Layout style={styles.container}>
      {hasBack && (
        <TouchableOpacity style={styles.backContainer} onPress={onPressBack}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.greyishBlack,
    fontWeight: '500',
  },
  backContainer: {
    position: 'absolute',
    left: 20,
    bottom: '80%',
  },
});

export default Header;
