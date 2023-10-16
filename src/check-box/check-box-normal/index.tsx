import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {execFunc} from './helper';
import {styles} from './styles';
import {CheckboxProps} from './type';

export const CheckBox = ({
  text,
  value,
  style,
  fillStyle,
  outlineStyle: outlineStyleOverwrite,
  onToggle,
  disable = false,
  initialValue = false,
}: CheckboxProps) => {
  // state
  const [localValue, setLocalValue] = useState<boolean>(initialValue);

  // function
  const onPress = useCallback(() => {
    if (typeof value === 'boolean') {
      execFunc(onToggle, !value);
    } else {
      execFunc(onToggle, !localValue);

      setLocalValue(v => !v);
    }
  }, [localValue, onToggle, value]);

  // render
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disable}
      onPress={onPress}
      style={[styles.root, style]}>
      <>
        <View style={[styles.outline, outlineStyleOverwrite]}>
          {localValue && <View style={[styles.fill, fillStyle]} />}
        </View>

        <Text style={styles.label}>{text}</Text>
      </>
    </TouchableOpacity>
  );
};
