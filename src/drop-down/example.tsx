import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {DropDown} from './component';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const DUMMY_DATA = [
  {label: 'item 1', value: 'item 1'},
  {label: 'item 2', value: 'item 2'},
  {label: 'item 3', value: 'item 3'},
  {label: 'item 4', value: 'item 4'},
];
const Example = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex}>
        <SafeAreaView style={styles.flex}>
          <PortalProvider>
            <PortalHost name="AppModal" />
            <View style={styles.wrap}>
              <DropDown placeHolder="Dropdown single" data={DUMMY_DATA} />
            </View>
            <View style={[styles.wrap]}>
              <DropDown
                multiple
                placeHolder="Dropdown multiple"
                data={DUMMY_DATA}
                multipleText="%d item đã được chọn"
              />
            </View>
            <View style={[styles.wrap, {width: 200, alignSelf: 'flex-end'}]}>
              <DropDown
                multiple
                placeHolder="Dropdown multiple"
                data={DUMMY_DATA}
                multipleText="%d item đã được chọn"
              />
            </View>
            <View style={styles.block} />
            <View style={styles.wrap}>
              <DropDown
                multiple
                placeHolder="Dropdown to top"
                data={DUMMY_DATA}
              />
            </View>
          </PortalProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap: {
    width: '100%',
    height: 50,
  },
  block: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default Example;
