import React, {memo} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import isEqual from 'lodash/isEqual';

import {styles} from './styles';
import {ItemProps} from './type';
import {icCheck} from './assets';

const DropDownItemComponent = ({
  item,
  labelStyle,
  activeItemStyle,
  activeLabelStyle,
  containerStyleItem,
  onPressItem,
  customTickIcon,
  selected = false,
}: ItemProps) => {
  // function
  const _onItemPress = () => {
    onPressItem && item && onPressItem(item.value ?? '');
  };

  // render
  return (
    <TouchableOpacity onPress={_onItemPress}>
      <View
        style={[
          styles.container,
          containerStyleItem,
          selected && activeItemStyle,
        ]}>
        <Text
          style={[styles.labelStyle, labelStyle, selected && activeLabelStyle]}>
          {item.label}
        </Text>
        <View style={[styles.wrapIcon]}>
          {selected &&
            (customTickIcon ? (
              customTickIcon()
            ) : (
              <Image source={icCheck} style={styles.icCheck} />
            ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const DropDownItem = memo(DropDownItemComponent, isEqual);
