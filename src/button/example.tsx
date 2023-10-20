import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from './component';

const Example = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Button text="Example 1" preset="primary" />
        <Button style={styles.btnStyle_2} text="Example 1" preset="outline" />
        <Button style={styles.btnStyle_3}>
          <Text>Hello world</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 50,
  },
  btnStyle_2: {
    marginTop: 24,
  },
  btnStyle_3: {
    marginTop: 24,
    alignItems: 'center',
  },
});

export default Example;
