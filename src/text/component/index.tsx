import React, {useMemo} from 'react';
import {
  Text as ReactNativeText,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';

import {useTranslation} from 'react-i18next';

import {propsToStyle} from './helper';

import {FONT_FAMILY, TextProps} from './type';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export const Text = ({
  t18n,
  text,
  flex,
  color,
  center,
  children,
  fontSize,
  textAlign,
  fontStyle,
  lineHeight,
  fontWeight,
  fontFamily,
  t18nOptions,
  textTransform,
  letterSpacing,
  style: styleOverride = {},
  ...rest
}: TextProps) => {
  const [t] = useTranslation();

  const i18nText = useMemo(
    () => t18n && t(t18n, t18nOptions),
    [t18n, t18nOptions, t],
  );

  const content = useMemo(
    () => i18nText || text || children,
    [i18nText, text, children],
  );

  const styleComponent = useMemo<StyleProp<TextStyle>>(
    () => [
      [
        flex === true && styles.flex,
        fontSize !== undefined && {fontSize: fontSize},
        fontFamily !== undefined && {fontFamily: FONT_FAMILY.REGULAR},

        center && {textAlign: 'center'},
        propsToStyle([
          {fontWeight},
          {color},
          {textAlign},
          {textTransform},
          {fontStyle},
          {letterSpacing},
          {lineHeight},
        ]),
      ],
    ],
    [
      flex,
      fontSize,
      fontFamily,
      center,
      fontWeight,
      color,
      textAlign,
      textTransform,
      fontStyle,
      letterSpacing,
      lineHeight,
    ],
  );

  // render
  return (
    <ReactNativeText
      allowFontScaling={false}
      {...rest}
      style={[styleComponent, styleOverride]}>
      {content}
    </ReactNativeText>
  );
};
