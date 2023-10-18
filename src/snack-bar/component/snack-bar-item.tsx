import React, {memo, useEffect, useMemo, useState} from 'react';
import {ViewStyle, View, Text, Image} from 'react-native';

import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  AnimatableValue,
  Easing,
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {sharedTiming, sharePause} from './helper';

import {
  BG_ERROR,
  BG_LINK,
  BG_SUCCESS,
  BG_WARN,
  DURATION_ANIMATED,
} from './constants';
import {styles} from './styles';
import {SnackBarItemProps, TYPE_MESSAGE, TypeMessage} from './type';
import {images} from './assets';

const getColor = (typeMessage: TypeMessage): string => {
  switch (typeMessage) {
    case TYPE_MESSAGE.SUCCESS:
      return BG_SUCCESS;
    case TYPE_MESSAGE.LINK:
      return BG_LINK;
    case TYPE_MESSAGE.WARN:
      return BG_WARN;
    case TYPE_MESSAGE.ERROR:
      return BG_ERROR;

    default:
      return BG_SUCCESS;
  }
};

const getIcon = (typeMessage: TypeMessage) => {
  switch (typeMessage) {
    case TYPE_MESSAGE.SUCCESS:
      return images.icTodo;

    case TYPE_MESSAGE.LINK:
      return images.icTodo;
    case TYPE_MESSAGE.WARN:
      return images.icTodo;

    case TYPE_MESSAGE.ERROR:
      return images.icTodo;

    default:
      return images.icTodo;
  }
};

export const SnackItem = memo(
  ({item, index, onPop}: SnackBarItemProps) => {
    // state
    const insets = useSafeAreaInsets();

    const [isShow, setIsShow] = useState<boolean>(true);

    const message = item.msg;

    const paused = useSharedValue(false);

    const shouldContinue = useSharedValue(true);

    const progress = useSharedValue(1);

    // style
    const containStyle = useMemo<ViewStyle>(
      () => ({
        backgroundColor: getColor(item.type),
        paddingTop: insets.top,
      }),
      [insets.top, item.type],
    );

    // function
    const CustomEnteringAnimation = (values: any) => {
      'worklet';
      const animations = {
        // your animations
        transform: [
          {translateY: sharedTiming(0, {duration: DURATION_ANIMATED})},
        ],
      };

      const initialValues = {
        // initial values for animations
        transform: [{translateY: -values.targetHeight}],
      };

      const callback = (_: boolean) => {
        // optional callback that will fire when layout animation ends
      };

      return {
        initialValues,
        animations,
        callback,
      };
    };

    const CustomExitAnimation = (values: any) => {
      'worklet';
      const animations = {
        // your animations
        zIndex: index,
        transform: [
          {
            translateY: sharedTiming(-(values.currentHeight + insets.top), {
              duration: DURATION_ANIMATED,
            }),
          },
        ],
      };

      const initialValues = {
        // initial values for animations
        transform: [{translateY: 0}],
        zIndex: index,
      };

      const callback = (_: boolean) => {
        runOnJS(onPop)(item);
        // optional callback that will fire when layout animation ends
      };

      return {
        initialValues,
        animations,
        callback,
      };
    };

    const flingGestureHandler = Gesture.Fling()
      .onStart(() => {
        shouldContinue.value = false;

        runOnJS(setIsShow)(false);
      })
      .onFinalize(() => {
        if (shouldContinue.value) {
          paused.value = false;
        }
      })
      .direction(Directions.UP)
      .onTouchesDown(() => {
        paused.value = true;
      });

    // effect
    useEffect(() => {
      progress.value = sharePause(
        withTiming(
          0,
          {
            duration: item.interval + DURATION_ANIMATED,
            easing: Easing.linear,
          },
          (finished?: boolean, _current?: AnimatableValue) => {
            if (finished) {
              runOnJS(setIsShow)(false);
            }
          },
        ),
        paused,
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // render
    return isShow ? (
      <GestureDetector gesture={flingGestureHandler}>
        <Animated.View
          entering={CustomEnteringAnimation}
          exiting={CustomExitAnimation}
          style={[styles.itemBar, containStyle]}>
          <Image style={styles.icon} source={getIcon(item.type)} />
          <View style={styles.devider} />
          <Text style={[styles.text]}>{message}</Text>
        </Animated.View>
      </GestureDetector>
    ) : null;
  },
  () => true,
);
