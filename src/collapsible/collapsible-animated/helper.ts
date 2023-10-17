import {useEffect} from 'react';
import Animated, {
  AnimationCallback,
  Easing,
  withTiming,
  WithTimingConfig,
  useSharedValue,
  useDerivedValue,
} from 'react-native-reanimated';

export const sharedBin = (value: boolean): 0 | 1 => {
  'worklet';

  return value ? 1 : 0;
};

/**
 * Updates position by running timing based animation from a given position to a destination determined by toValue.
 */
export const sharedTiming = (
  toValue: number,
  config?: WithTimingConfig,
  callBack?: AnimationCallback,
) => {
  'worklet';

  return withTiming(
    toValue,
    Object.assign(
      {
        duration: 500,
        easing: Easing.bezier(0.33, 0.01, 0, 1),
      },
      config,
    ),
    callBack,
  );
};

/**
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
        {
          duration: 500,
          easing: Easing.bezier(0.33, 0.01, 0, 1),
        },
        config,
      ),
    ),
  );
};
