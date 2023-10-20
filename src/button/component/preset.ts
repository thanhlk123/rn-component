import {StyleSheet} from 'react-native';

export const Colors = {
  primary: 'red',
  secondary: '',
  white: 'white',
  red: 'red',
};

export const stylesView = StyleSheet.create({
  primary: {
    borderRadius: 4,
    paddingVertical: 5,
    backgroundColor: Colors.red,
    alignItems: 'center',
  },

  outline: {
    borderRadius: 4,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.red,
    alignItems: 'center',
  },
  default: {},
});

export const stylesText = StyleSheet.create({
  primary: {
    fontSize: 16,
    color: Colors.white,
  },

  outline: {
    fontSize: 16,
    color: Colors.red,
  },
  default: {},
});

export type ButtonPresetNames = keyof typeof stylesView;
