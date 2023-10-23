# Select component:
 - Select component to reuse.

### Dependencies: 
 - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/): Follow this document to setup reanimated
 - [@gorhom/portal](https://www.npmjs.com/package/@gorhom/portal)
 - [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)
 - [lodash](https://www.npmjs.com/package/lodash)

### Set up:
 - Because we you portal to show modal, please setup <PortalProvider/> + <PortalHost/> in app.tsx global
 - We use inset to calculate, please setup <SafeAreaProvider/> in app.tsx global

### Props:
 - data: Array<{text: string, itemCallback?: function}>; 

 - onPress?: (item: SelectOption, index: number) => void; //Call back when click one item

 - defaultSelect?: string;

 - renderItem?: any;

 - backDropColor?: string; //Backdrop color when modal show

 - rightChildren?: React.ReactNode; //Children right of option

 - customItem?: (item: SelectOption, index: number) => React.ReactNode; //Overwrite text item

 - textItemStyle?: StyleProp<TextStyle>; //

 - useBottomInset?: boolean;

### Demo:
 - ![Dropdown demo](https://i.imgur.com/YUD6I39.gif)

