import './setup';
import {Alert, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import DateRangePicker from './range-picker';

const Example = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.flex}>
        <ScrollView>
          <DateRangePicker singleSelectMode defaultValue={'2023-10-12'} />

          <DateRangePicker />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default Example;
