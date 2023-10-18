import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    minHeight: 50,
  },
  itemBar: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    position: 'absolute',
    width: '100%',

    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginTop: -2,
    flex: 1,
    color: 'white',
    paddingLeft: 16,
  },
  devider: {
    height: 10,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
});
