import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout, Input} from 'react-native-ui-kitten';
import colors from '../assets/colors';

const InputField = ({
  label = '',
  width,
  placeholder = '',
  secureTextEntry = false,
}) => {
  return (
    <Layout style={[styles.container, {width: width}]}>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        selectionColor={colors.grey}
        secureTextEntry={secureTextEntry}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    marginTop: 7,
  },
  input: {
    backgroundColor: colors.lightBlue,
  },
  label: {
    fontSize: 12,
    color: colors.white,
    marginBottom: 5,
  },
});

export default InputField;
