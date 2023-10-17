import React, {useEffect, useState} from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {sharedTiming, useSharedTransition} from './helper';

import {styles} from './styles';
import {CollapsibleProps} from './type';

export const Collapsible = ({
  children,
  renderContent,
  renderMasterView,
  disable,
}: CollapsibleProps) => {
  // state
  const [measured, setMeasured] = useState<LayoutRectangle>();

  const [isShow, setIsShow] = useState(false);

  // reanimated
  const progress = useSharedTransition(isShow);

  const height = useSharedValue(0);

  // function
  const onPress = () => {
    setIsShow(v => !v);
  };

  const onLayoutContent = (e: LayoutChangeEvent) => {
    if (!measured) {
      setMeasured(e.nativeEvent.layout);
    }
  };

  // reanimated style
  const contentStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  // effect
  useEffect(() => {
    if (isShow) {
      height.value = sharedTiming(measured?.height || 0);
    } else {
      height.value = sharedTiming(0);
    }
  }, [height, isShow, measured?.height]);

  // render
  return (
    <View>
      <Animated.View
        pointerEvents={'none'}
        onLayout={onLayoutContent}
        style={[styles.base, styles.hiddenView]}>
        {renderContent ? renderContent(progress) : children}
      </Animated.View>
      <TouchableOpacity disabled={disable} onPress={onPress}>
        {renderMasterView ? (
          renderMasterView(progress)
        ) : (
          <View style={styles.header}>
            <Text>Toggle</Text>
          </View>
        )}
      </TouchableOpacity>

      <Animated.View style={[styles.base, contentStyle]}>
        {renderContent ? renderContent(progress) : children}
      </Animated.View>
    </View>
  );
};
