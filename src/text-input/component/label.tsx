import React, {useMemo} from 'react';
import {Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {styles} from './styles';
import {LabelProps} from './type';
import {ColorDefault} from './helper';

export const Label = ({label, labelI18n, required}: LabelProps) => {
  // state
  const [t] = useTranslation();

  const content = useMemo(
    () => label || (labelI18n && t(labelI18n)),
    [label, labelI18n, t],
  );

  // render
  return (
    <View style={styles.rowLabel}>
      <Text style={{color: ColorDefault.text}}>{content}</Text>
      {required ? <Text style={{color: ColorDefault.error}}> *</Text> : null}
    </View>
  );
};
