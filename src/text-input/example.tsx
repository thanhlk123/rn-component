import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {TextInput} from './component';
import {icUser} from './assets';

const Example = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mx_12}>
        <TextInput
          rightChildren={<Image style={styles.rightIcon} source={icUser} />}
          label="Example Text Input"
          noBorder
          placeholder="Type some thing ..."
        />
      </View>

      <View style={styles.mx_12}>
        <TextInput
          label="Example Text Input 2"
          placeholder="Type some thing ..."
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  mx_12: {marginHorizontal: 12, marginTop: 12},
});

export default Example;
