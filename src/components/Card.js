import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Layout} from 'react-native-ui-kitten';
import colors from '../assets/colors';

const Card = ({label, children}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {children}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    borderRadius: 10,
    height: 150,
    backgroundColor: colors.white,
    margin: 8,
    shadowColor: colors.grey,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: colors.greyishBlack,
    fontWeight: '600',
    marginRight: 'auto',
  },
});

export default Card;
