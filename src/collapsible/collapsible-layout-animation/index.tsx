import React, {useState} from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  Text,
  View,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';

import {styles} from './styles';
import {CollapsibleProps} from './type';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const Collapsible = ({
  children,
  renderContent,
  renderMasterView,
  disable,
}: CollapsibleProps) => {
  // state
  const [measured, setMeasured] = useState<LayoutRectangle>();

  const [isShow, setIsShow] = useState(false);

  // function
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setIsShow(v => !v);
  };

  const onLayoutContent = (e: LayoutChangeEvent) => {
    if (!measured) {
      setMeasured(e.nativeEvent.layout);
    }
  };

  // render
  return (
    <View>
      <View
        pointerEvents={'none'}
        onLayout={onLayoutContent}
        style={[styles.base, styles.hiddenView]}>
        {renderContent ? renderContent : children}
      </View>
      <TouchableOpacity disabled={disable} onPress={onPress}>
        {renderMasterView ? (
          renderMasterView
        ) : (
          <View style={styles.header}>
            <Text>Toggle</Text>
          </View>
        )}
      </TouchableOpacity>

      {isShow && (
        <View style={[styles.base]}>
          {renderContent ? renderContent : children}
        </View>
      )}
    </View>
  );
};
