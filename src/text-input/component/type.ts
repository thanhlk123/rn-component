import React from 'react';
import {TextInputProps as RNTextInputProps, ViewProps} from 'react-native';

import Animated from 'react-native-reanimated';

export type ErrorLineProps = {
  error: Animated.SharedValue<boolean>;
  disabled: Animated.SharedValue<boolean>;
};

export type FocusedLineProps = {
  focused: Animated.SharedValue<boolean>;
  disabled: Animated.SharedValue<boolean>;
};

export type TextInputProps = RNTextInputProps & {
  /**
   * Format text before call onChangeText function
   * @default undefined
   */
  rxFormat?: RegExp;

  /**
   * Trigger name field of react hook form
   * @default undefined
   */
  nameTrigger?: string;

  /**
   * Translate placeholder by I18n
   * @default undefined
   */
  placeholderI18n?: string;

  /**
   * Children right input.(ex:Icon show/hide password)
   */
  rightChildren?: React.ReactNode;

  /**
   * Invalid input or not
   * @default false
   */
  error?: boolean;

  /**
   * Define container style
   * @default undefined
   */
  containerStyle?: ViewProps;

  /**
   * Border input or not
   * @default false
   */
  noBorder?: boolean;
} & LabelProps;

export type LabelProps = {
  /**
   * Label of text input
   */
  label?: string;

  /**
   * Translate label by I18n
   * @default undefined
   */
  labelI18n?: string;

  /**
   * Add red dot right label or not
   * @default false
   */
  required?: boolean;
};
