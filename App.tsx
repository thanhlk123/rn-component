import {View, StyleSheet} from 'react-native';
import React from 'react';
// import CollapsibleExample from './src/collapsible/example';
// import Example from './src/snack-bar/example';
// import CheckboxIntegrate from './src/check-box/example';
// import GlobalModalIntegrate from './src/global-modal/example';
// import Example from './src/text/example';
// import Example from './src/text-input/example';
import Example from './src/list-view/example';

const App = () => {
  return (
    <View style={styles.container}>
      <Example />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
