import {View, StyleSheet} from 'react-native';
import React from 'react';
import CheckboxIntegrate from './src/check-box/example';

const App = () => {
  return (
    <View style={styles.container}>
      <CheckboxIntegrate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
