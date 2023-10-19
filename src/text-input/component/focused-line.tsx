import React from 'react';

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import {ColorDefault, sharedTiming} from './helper';

import {styles} from './styles';
import {FocusedLineProps} from './type';

export const FocusedLine = ({focused, disabled}: FocusedLineProps) => {
  const widthPercent = useDerivedValue(
    () =>
      sharedTiming(focused.value && !disabled.value ? 100 : 0, {
        duration: 200,
      }),
    [],
  );

  // style
  const lineStyle = useAnimatedStyle(
    () => ({
      width: `${widthPercent.value}%`,
      backgroundColor: ColorDefault.primary,
    }),
    [],
  );

  // render
  return (
    <Animated.View
      pointerEvents={'none'}
      style={[styles.lineStatus, lineStyle]}
    />
  );
};
