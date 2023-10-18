import {
  AnimatableValue,
  AnimationCallback,
  defineAnimation,
  Easing,
  SharedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

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

export const sharePause = (
  _nextAnimation: any,
  paused: SharedValue<boolean>,
) => {
  'worklet';

  return defineAnimation(_nextAnimation, () => {
    'worklet';
    const nextAnimation: any =
      typeof _nextAnimation === 'function' ? _nextAnimation() : _nextAnimation;

    const onFrame = (state: any, now: number) => {
      const {lastTimestamp, elapsed} = state;

      if (paused.value) {
        state.elapsed = now - lastTimestamp;

        return false;
      }

      const dt = now - elapsed;

      const finished = nextAnimation.onFrame(nextAnimation, dt);

      state.current = nextAnimation.current;

      state.lastTimestamp = dt;

      return finished;
    };

    const onStart = (
      state: any,
      value: AnimatableValue,
      now: number,
      previousState: any,
    ) => {
      state.lastTimestamp = now;

      state.elapsed = 0;

      state.current = 0;

      nextAnimation.onStart(nextAnimation, value, now, previousState);
    };

    const callback = (finished?: boolean): void => {
      if (nextAnimation.callback) {
        nextAnimation.callback(finished);
      }
    };

    return {
      onFrame,
      onStart,
      isHigherOrder: true,
      current: nextAnimation.current,
      callback,
      previousAnimation: null,
      startTime: 0,
      started: false,
      lastTimestamp: 0,
      elapsed: 0,
    };
  });
};
