import {Button, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {SnackBar, showSnack} from './component';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {TypeMessage} from './component/type';

type IMessage = {
  message: string;
  type?: TypeMessage;
};
const Example = () => {
  const onPressMessage = ({message, type}: IMessage) => {
    showSnack({
      msg: message,
      interval: 1000,
      type: type,
    });
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Button
            title="Trigger success"
            onPress={() =>
              onPressMessage({message: 'Đây là success', type: 'success'})
            }
          />
          <Button
            title="Trigger error"
            onPress={() =>
              onPressMessage({message: 'Đây là error', type: 'error'})
            }
          />
          <Button
            title="Trigger warn"
            onPress={() =>
              onPressMessage({message: 'Đây là warn', type: 'warn'})
            }
          />
          <Button
            title="Trigger link"
            onPress={() =>
              onPressMessage({message: 'Đây là link', type: 'link'})
            }
          />
          <SnackBar />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Example;
