import {View, StyleSheet} from 'react-native';
import React from 'react';
import CollapsibleExample from './src/collapsible/example';
// import CheckboxIntegrate from './src/check-box/example';
// import GlobalModalIntegrate from './src/global-modal/example';

const App = () => {
  return (
    <View style={styles.container}>
      <CollapsibleExample />
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
