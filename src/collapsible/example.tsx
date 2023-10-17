import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Collapsible} from './collapsible-animated';
import {Collapsible as CollapsibleLayoutAnimation} from './collapsible-layout-animation';

const CollapsibleExample = () => {
  return (
    <View style={styles.container}>
      <Collapsible
        renderContent={() => (
          <View>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, vel placeat nemo fuga ea quidem dolores ex sit
              incidunt, est ab molestias repellat nisi cupiditate, laboriosam
              officia quasi sint modi.
            </Text>
          </View>
        )}
        renderMasterView={() => (
          <View style={styles.header}>
            <Text>Toggle View Animated</Text>
          </View>
        )}
      />
      <View style={styles.block} />
      <CollapsibleLayoutAnimation
        renderContent={
          <View>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, vel placeat nemo fuga ea quidem dolores ex sit
              incidunt, est ab molestias repellat nisi cupiditate, laboriosam
              officia quasi sint modi.
            </Text>
          </View>
        }
        renderMasterView={
          <View style={styles.header}>
            <Text>Toggle View LayoutAnimation</Text>
          </View>
        }
      />
      <View style={styles.block} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 50,
  },
  block: {height: 100, backgroundColor: 'pink'},
  container: {
    flex: 1,
  },
});

export default CollapsibleExample;
