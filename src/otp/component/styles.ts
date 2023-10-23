import {StyleSheet} from 'react-native';

const WIDTH_OTP = 40;

export const HEIGHT_OTP = 52;

export const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpView: {
    width: WIDTH_OTP,
    height: HEIGHT_OTP,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  otpViewActive: {
    borderColor: 'grey',
  },
  row: {
    flexDirection: 'row',
  },
  otpText: {
    fontSize: 14,
    color: '#000000',
    textAlignVertical: 'bottom',
  },
  input: {
    flex: 1,
    position: 'absolute',
    textAlign: 'center',
    height: HEIGHT_OTP,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    color: 'transparent',
    opacity: 0,
  },
  spacer: {
    width: 15,
  },
});
