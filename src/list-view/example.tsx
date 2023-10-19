import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ListView} from './component';

const Example = () => {
  const renderItem = ({item}: {item: number}) => {
    return (
      <View style={styles.itemStyle}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.flex}>
      <ListView
        keyExtractor={item => item}
        data={[...Array(100).keys()]}
        renderItem={renderItem}
        estimatedItemSize={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  flex: {
    flex: 1,
  },
});

export default Example;
