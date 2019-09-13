import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Layout, Button} from 'react-native-ui-kitten';
import Input from '../components/Input';
import NavigationService from '../../NavigationService';
import colors from '../assets/colors';

const SignUp = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.skyBlue}} />
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled>
          <LinearGradient
            colors={[
              '#099FE9',
              '#099FE9',
              '#099FE9',
              '#099FE9',
              '#099FE9',
              '#099FE9',
              '#2DBCFE',
              '#2DBCFE',
              '#9EE2FE',
              '#C6ECFF',
              '#FBFBFC',
              '#FFFFFF',
            ]}
            style={styles.container}>
            <Text style={styles.title}>
              Sign up and activate your home's KeyCode.
            </Text>
            <Layout style={styles.inputContainer}>
              <Layout style={styles.row}>
                <Input label="NAME" width="48%" placeholder="First" />
                <Input width="48%" placeholder="Last" />
              </Layout>
              <Input label="EMAIL" width="100%" />
              <Input label="PASSWORD" width="100%" secureTextEntry />
              <Input label="CONFIRM PASSWORD" width="100%" secureTextEntry />
            </Layout>
            <Button
              style={styles.buttonStyle}
              textStyle={styles.buttonLabel}
              activeOpacity={0}
              onPress={() => NavigationService.navigate('Home')}>
              Next
            </Button>
          </LinearGradient>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  text: {
    marginVertical: 16,
  },
  inputContainer: {
    width: '90%',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    color: colors.white,
    fontWeight: '200',
    width: '80%',
  },
  buttonStyle: {
    width: '90%',
    backgroundColor: colors.white,
    borderWidth: 0,
    borderRadius: 3,
    marginTop: 20,
  },
  buttonLabel: {
    color: colors.darkGrey,
    fontSize: 14,
  },
});

export default SignUp;
