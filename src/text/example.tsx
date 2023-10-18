import {View} from 'react-native';
import React from 'react';
import {Text} from './component';

const Example = () => {
  return (
    <View>
      <Text>example</Text>
      <Text fontSize={18} text="Example 2" />
      <Text fontWeight="bold" fontSize={28} color="red" text="Example 3" />
      <Text fontWeight="bold" fontSize={28} color="red" t18n="Tenu.dashboard" />
    </View>
  );
};

export default Example;
