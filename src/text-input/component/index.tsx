import React, {ForwardedRef, forwardRef} from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
} from 'react-native';

import {useTranslation} from 'react-i18next';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import {ColorDefault, execFunc} from './helper';

import {ErrorLine} from './error-line';
import {FocusedLine} from './focused-line';
import {Label} from './label';
import {styles} from './styles';
import {TextInputProps} from './type';

export const TextInput = forwardRef(
  (
    {
      error,
      label,
      required,
      editable,
      rxFormat,
      labelI18n,
      multiline,
      placeholder,
      rightChildren,
      placeholderI18n,
      placeholderTextColor,
      onBlur,
      onFocus,
      onChangeText,
      containerStyle: overrideStyle,
      noBorder,
      ...rest
    }: TextInputProps,
    ref: ForwardedRef<RNTextInput>,
  ) => {
    // state
    const [t] = useTranslation();

    const focusedValue = useSharedValue(false);

    const errorValue = useDerivedValue(() => error === true, [error]);

    const disabled = useDerivedValue(() => editable === false, [editable]);

    const borderColor = useDerivedValue(() => {
      switch (true) {
        case disabled.value:
          return ColorDefault.border;
        case errorValue.value:
          return ColorDefault.error;
        case focusedValue.value:
          return ColorDefault.primary;

        default:
          return ColorDefault.line;
      }
    }, [ColorDefault]);

    // func
    const handleTextChange = (text: string) => {
      const actualText =
        rxFormat !== undefined ? text.replace(rxFormat, '') : text;

      execFunc(onChangeText, actualText);
    };

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      focusedValue.value = true;

      execFunc(onFocus, e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      focusedValue.value = false;

      execFunc(onBlur, e);
    };

    // style
    const containerRestyle = useAnimatedStyle(
      () => ({
        borderColor: borderColor.value,
      }),
      [],
    );

    // render
    return (
      <>
        <Label label={label} labelI18n={labelI18n} required={required} />
        <Animated.View
          style={[
            styles.containerInput,
            noBorder && styles.noBorder,
            overrideStyle,
            containerRestyle,
          ]}>
          <RNTextInput
            {...rest}
            ref={ref}
            editable={editable}
            autoCorrect={false}
            spellCheck={false}
            clearButtonMode={'never'}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={
              editable === false ? ColorDefault.border : placeholderTextColor
            }
            placeholder={placeholder || (placeholderI18n && t(placeholderI18n))}
            selectionColor={ColorDefault.primary}
            style={[styles.input, multiline && styles.multiline]}
            multiline={multiline}
            onChangeText={handleTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {rightChildren}
          {!!noBorder && (
            <React.Fragment>
              <FocusedLine focused={focusedValue} disabled={disabled} />
              <ErrorLine error={errorValue} disabled={disabled} />
            </React.Fragment>
          )}
        </Animated.View>
      </>
    );
  },
);
