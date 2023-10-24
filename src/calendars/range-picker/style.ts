import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: 584,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 16,
  },
  viewTitle: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerModal: {
    width: 32,
    height: 4,
    backgroundColor: 'rgb(228,228,228)',
    marginTop: 10,
    borderRadius: 2,
  },
  headerText: {
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 16,
    color: 'orange',
    letterSpacing: -0.3,
  },
  viewTextDate: {
    fontFamily: 'AvenirNext-Medium',
    letterSpacing: -0.3,
  },
  wrapperTextDate: {
    flexDirection: 'row',
    height: 43,
    borderRadius: 4,
    backgroundColor: 'rgb(247,247,247)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTextApply: {
    backgroundColor: 'orange',
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 46,
  },
  textApply: {
    fontFamily: 'AvenirNext-DemiBold',
    paddingVertical: 12,
    color: '#ffffff',
    letterSpacing: -0.3,
  },
  arrowModalCustom: {
    height: 24,
    width: 24,
    backgroundColor: 'orange',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarModal: {
    paddingVertical: 10,
    height: 355,
  },
});

export default styles;
