/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Animated, {
  Easing,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  CHILD_ANIM_DURATION,
  LAYOUT_ANIM_DURATION,
  MODAL_ANIM_DURATION,
} from './constants';

type ChildWrapperProps = {
  isEnabled: boolean;
  ignoreDelay: boolean;
  hideClose?: boolean;
  onClosePress: () => void;
  children: React.ReactNode;
};

function ChildWrapper({
  isEnabled,
  ignoreDelay,
  hideClose,
  onClosePress,
  children,
}: ChildWrapperProps) {
  const opacityValue = useSharedValue(0);
  const viewStyle = useAnimatedStyle(() => {
    return {opacity: opacityValue.value};
  }, [isEnabled]);

  useEffect(() => {
    if (isEnabled) {
      opacityValue.value = withDelay(
        ignoreDelay ? 0 : CHILD_ANIM_DURATION + LAYOUT_ANIM_DURATION,
        withTiming(1, {
          duration: CHILD_ANIM_DURATION,
          easing: Easing.ease,
        }),
      );
    } else {
      opacityValue.value = withTiming(0, {
        duration: CHILD_ANIM_DURATION,
        easing: Easing.ease,
      });
    }
  }, [isEnabled, ignoreDelay]);

  return (
    <Animated.View
      style={[
        viewStyle,
        styles.viewStyle,
        isEnabled ? styles.positionRelative : styles.positionAbsolute,
      ]}
      exiting={ignoreDelay ? undefined : FadeOut.duration(MODAL_ANIM_DURATION)}
      needsOffscreenAlphaCompositing>
      {children}
      {!hideClose && (
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onClosePress}>
          <Text style={styles.textStyle}>Close Modal</Text>
        </Pressable>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    marginTop: 16,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewStyle: {
    margin: 32,
  },
  positionAbsolute: {
    position: 'absolute',
  },
  positionRelative: {
    position: 'relative',
  },
});

export default ChildWrapper;
