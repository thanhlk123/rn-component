import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {Modal} from './component';
import {SlideInDown} from 'react-native-reanimated';

const Example = () => {
  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isShowDefault, setShowDefault] = useState(false);
  return (
    <SafeAreaView style={styles.flex}>
      <PortalProvider>
        <PortalHost name="AppModal" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setShowDefault(true);
            }}>
            <Text>Show Modal default</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setVisible(true);
            }}>
            <Text>Show Modal after Modal</Text>
          </TouchableOpacity>

          <Modal style={styles.modalContainer} isVisible={isShowDefault}>
            <View style={styles.modal}>
              <Text style={styles.modalHeader}>Modal Default</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setShowDefault(false);
                }}>
                <Text>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal style={styles.modalContainer} isVisible={isVisible}>
            <View style={styles.modal}>
              <Text style={styles.modalHeader}>Modal 1</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setVisible(false);
                  setVisible2(true);
                }}>
                <Text>Show modal 2</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Modal
            style={styles.modalContainer}
            entering={SlideInDown}
            isVisible={isVisible2}>
            <View style={styles.modal}>
              <Text style={styles.modalHeader}>
                Modal 2 show after modal 1 close
              </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setVisible2(false);
                }}>
                <Text>Close modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </PortalProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  modalContainer: {alignItems: 'center'},
  modalHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Example;
