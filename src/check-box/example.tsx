import {View} from 'react-native';
import React from 'react';
import {CheckBox as CheckBoxReanimated} from './check-box-with-reanimated';
import {CheckBox} from './check-box-normal';

const CheckboxIntegrate = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CheckBoxReanimated text="Checkbox Reanimated" initialValue />
      <View style={{paddingTop: 20}} />
      <CheckBox text="Checkbox" initialValue />
    </View>
  );
};

export default CheckboxIntegrate;
