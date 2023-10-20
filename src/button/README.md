# Button component:
 - Button component to reuse.

### Dependencies:
 - [react-i18next](https://www.npmjs.com/package/react-i18next)
 - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/): Follow this document to setup reanimated


### Props:
 - t18n?: string; //Text which is looked up via i18n.
 - text?: string; //Using text instead i18n
 - style?: StyleProp<ViewStyle>;
 - textStyle?: StyleProp<TextStyle>;
 - preset?: "primary" || "outline" || "default";
 - textColor?: string;
 - buttonColor?: string;
 - children?: React.node;
 - throttleMs?: number; //delay when press button;
 
### Preset: 
 - You can create a common UI for button by define preset.
    - "primary"
    - "outline"
    - "default": default value (no style)
### Usage:
 ```    
    <Button text="Example 1" preset="primary" />

    <Button style={styles.btnStyle_2} text="Example 1" preset="outline" />
    
    <Button style={styles.btnStyle_3}>
        <Text>Hello world</Text>
    </Button>
```




