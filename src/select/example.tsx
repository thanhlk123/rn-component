import {PortalHost, PortalProvider} from '@gorhom/portal';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Select} from './component';

const DUMMY_DATA = [
  {text: 'Option_1'},
  {text: 'Option_2'},
  {text: 'Option_3'},
  {text: 'Option_4'},
  {text: 'Option_5'},
  {text: 'Option_6'},
  {text: 'Option_7'},
];
const Example = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flex}>
        <PortalProvider>
          <PortalHost name="AppModal" />
          <Select textItemStyle={styles.optionTxt} data={DUMMY_DATA} />
        </PortalProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  optionTxt: {
    fontSize: 16,
    paddingLeft: 15,
  },
});

export default Example;
