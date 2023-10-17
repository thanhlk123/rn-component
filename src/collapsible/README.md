# Collapsible component
    - Create a Collapsible component

## Collapsible Layout Animation:

### Depedencies: none

### Props:
 - renderMasterView?: React.ReactNode;

 - renderContent?: React.ReactNode;

 - children?: React.ReactNode;

 - disable?: boolean;


## Collapsible with Reanimated:

### Depedencies: 
 - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/): Follow this document to setup reanimated

### Props:
 - renderMasterView?: (
    progress: Animated.SharedValue<number>,
  ) => React.ReactNode;

 - renderContent?: (progress: Animated.SharedValue<number>) => React.ReactNode;

 - children?: React.ReactNode;

 - disable?: boolean;

### Demo:
 - ![Collapsible Demo](https://i.imgur.com/fMtbGZx.gif)
 