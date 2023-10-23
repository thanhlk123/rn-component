# Dropdown select component:
 - Dropdown select component to reuse.

### Dependencies: 
 - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/): Follow this document to setup reanimated
 - [@gorhom/portal](https://www.npmjs.com/package/@gorhom/portal)
 - [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)
 - [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler)
 - [lodash](https://www.npmjs.com/package/lodash)

### Set up:
 - Because we you portal to show modal, please setup <PortalProvider/> + <PortalHost/> in app.tsx global
 - We use inset to calculate, please setup <SafeAreaProvider/> + <GestureRootView/> in app.tsx global

### Props:
 - data: Array<{label: string, value: string|number|any}>; 

 - defaultValue?: Array<string> | string; //inital value selected

 - placeHolder?: string; //placeholder label

 - placeholderStyle?: TextStyle;

 - style?: ViewStyle;

 - dropDownStyle?: ViewStyle;

 - style?: ViewStyle | ViewStyle[];

 - containerStyle?: ViewStyle;

 - showArrow?: boolean;

 - renderArrow?: (progress: Animated.SharedValue<number>) => React.ReactNode; //Overwrite animated arrow component

 - disabled?: boolean;

 - multiple?: boolean; //<strong>If set to true selecting multiple items is possible.</strong>

 - multipleText?: string; //a Text to inform the user how many items have been selected. @default '%d items have been selected'

 - onOpen?: () => void;

 - onClose?: () => void;

 - onChangeItem?: (item: string | string[], index: number | number[]) => void;


### Demo:
 - ![Dropdown demo](https://i.imgur.com/Kl7oznG.gif)

