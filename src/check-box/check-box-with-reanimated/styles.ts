import {StyleSheet} from 'react-native';

const DIMENSIONS = {width: 16, height: 16};

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  outline: {
    ...DIMENSIONS,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    borderRadius: 1,
  },
  fill: {
    width: DIMENSIONS.width - 4,
    height: DIMENSIONS.height - 4,
    backgroundColor: 'black',
  },
  label: {
    paddingLeft: 8,
  },
});
