import {useEffect} from 'react';

import Animated, {
  Easing,
  useDerivedValue,
  useSharedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

type TypesBase =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';

/**
 * Convert boolean to 0 or 1 on UI thead
 */
export const sharedBin = (value: boolean): 0 | 1 => {
  'worklet';

  return value ? 1 : 0;
};

/*
 * Return value runs from 0 to 1 when state change using withTiming
 */
export const useSharedTransition = (
  state: boolean | number,
  config?: WithTimingConfig,
  initialValue?: number,
): Animated.SharedValue<number> => {
  const value = useSharedValue(initialValue ?? 0);

  useEffect(() => {
    value.value = typeof state === 'boolean' ? sharedBin(state) : state;
  }, [state, value]);

  return useDerivedValue(() =>
    withTiming(
      value.value,
      Object.assign(
        {duration: 500, easing: Easing.bezier(0.33, 0.01, 0, 1)},
        config,
      ),
    ),
  );
};

/**
 * Linear interpolation between x and y using a to weight between them
 */
export const useMix = (
  progress: Animated.SharedValue<number>,
  x: number,
  y: number,
) => {
  'worklet';

  return useDerivedValue(() => x + progress.value * (y - x));
};

export const execFunc = <Fn extends (...args: any[]) => any>(
  func?: Fn,
  ...args: Parameters<Fn>
) => {
  if (onCheckType(func, 'function')) {
    func(...args);
  }
};

export const onCheckType = (
  source: any,
  type: TypesBase,
): source is TypesBase => {
  return typeof source === type;
};
