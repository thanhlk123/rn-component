import {StyleSheet, Alert, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Otp} from './component';

const Example = () => {
  const checkOtp = () => {
    /**
     * Todo
     */
    Alert.alert('Thong bao', 'OTP filled');
  };
  return (
    <SafeAreaView style={styles.flex}>
      <Text style={styles.title}>OTP example</Text>
      <Otp length={5} onOtpFilled={checkOtp} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Example;
