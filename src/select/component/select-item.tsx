import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import equals from 'lodash/isEqual';

import {onCheckType} from './helper';

import {styles} from './styles';
import {SelectItemProps} from './type';
import {icCheck} from './assets';

const SelectItemComponent = ({
  item,
  index,
  textItemStyle,
  onPress,
  customItem,
  selected,
}: SelectItemProps) => {
  // function
  const _onPress = () => {
    if (onCheckType(onPress, 'function')) {
      onPress(item, index);
    }
  };

  // render
  return (
    <TouchableOpacity onPress={_onPress} activeOpacity={0.85}>
      <View style={[[styles.container]]}>
        {customItem ? (
          customItem(item, index)
        ) : (
          <React.Fragment>
            <Text
              style={[styles.text, textItemStyle]}
              children={item.text ?? ''}
            />
            {selected && <Image source={icCheck} style={styles.icCheck} />}
          </React.Fragment>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const SelectItem = memo(SelectItemComponent, equals);
