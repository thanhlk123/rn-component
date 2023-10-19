# Text Input component:
 - Text Input component to reuse.

### Dependencies:
 - [react-i18next](https://www.npmjs.com/package/react-i18next): Follow this document to setup reanimated
 - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/): Follow this document to setup reanimated

### Props:
 - rxFormat?: RegExp;
 - placeholderI18n?: string; //Translate placeholder by I18n
 - rightChildren?: React.ReactNode; //Children right input.(ex:Icon show/hide password)
 - error?: boolean; //Invalid input or not
 - labelI18n?: string //translate label by I18n,
 - multiline: boolean,
 - placeholder: string,
 - containerStyle: overrideStyle,
 - noBorder?: boolean //border or not
 - ...TextInputProps

### Usage:
    - Text input example
 ```    
    <TextInput
        rightChildren={<Image style={styles.rightIcon} source={icUser} />}
        label="Example Text Input"
        noBorder
        placeholder="Type some thing ..."
    />
```
### Demo
 - ![Text Input Demo](https://i.imgur.com/qzYD1Ry.gif)







