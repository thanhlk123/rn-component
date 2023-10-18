import React from 'react';
import {
  Platform,
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

// prefix font Family
const DEFAULT_PREFIX_FONT_FAMILY =
  Platform.OS === 'ios' ? 'san Francisco' : 'Roboto';

// fontFamily
export const FONT_FAMILY = {
  BOLD: `${DEFAULT_PREFIX_FONT_FAMILY}-Bold`,
  LIGHT: `${DEFAULT_PREFIX_FONT_FAMILY}-Light`,
  MEDIUM: `${DEFAULT_PREFIX_FONT_FAMILY}-Medium`,
  REGULAR: `${DEFAULT_PREFIX_FONT_FAMILY}-Regular`,
  SEMIBOLD: `${DEFAULT_PREFIX_FONT_FAMILY}-SemiBold`,
};

type IFontFamily = keyof typeof FONT_FAMILY;

export interface TextProps extends TextProperties {
  fontStyle?: 'normal' | 'italic';

  letterSpacing?: number;

  lineHeight?: number;

  /**
   * Children of text
   * @default undefined
   */
  children?: React.ReactNode;

  /**
   * Text which is looked up via i18n.
   * @default undefined
   */
  t18n?: string;

  /**
   * Option of i18n
   * @default undefined
   */
  t18nOptions?: any;

  /**
   * Using text string instead i18n
   * @default undefined
   */
  text?: string;

  /**
   * Enable to using {flex:1}
   * @default undefined
   */
  flex?: boolean;

  /**
   * Overwrite font size
   * @default 14
   */
  fontSize?: number;

  /**
   * Overwrite font weight
   * @default undefined
   */
  fontWeight?: FontWeight;

  /**
   * Overwrite font family
   * @default undefined
   */
  fontFamily?: IFontFamily;

  /**
   * Using color
   * @default undefined
   */
  color?: string;

  /**
   * Set true for using textAlign = 'center'
   * @default undefined
   */
  center?: boolean;

  /**
   * Overwrite textAlign
   * @default undefined
   */
  textAlign?: TextAlign;

  /**
   * Overwrite textTransform
   * @default undefined
   */
  textTransform?: TextTransform;

  /**
   * Overwrite style of text component
   * @default undefined
   */
  style?: StyleProp<TextStyle>;
}
