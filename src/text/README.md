# Text component:
 - Text component to reuse.

### Dependencies:
 - [react-i18next](https://www.npmjs.com/package/react-i18next): Follow this document to setup reanimated

### Props:
 - fontStyle?: 'normal' | 'italic';
 - letterSpacing?: number;
 - lineHeight?: number;
 - children?: React.ReactNode;
 - t18n?: string; //i18n translate key
 - t18nOptions?: any; //i18n translate option
 - text?: string;
 - flex?: boolean;
 - fontSize?: number;
 - fontWeight?: FontWeight;
 - fontFamily?: IFontFamily;
 - color?: string;
 - center?: boolean;
 - textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
 - textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
 - style?: StyleProp<TextStyle>;

### Usage:
 ```    
    <Text>example</Text>
    <Text fontSize={18} text="Example 2" />
    <Text fontWeight="bold" fontSize={28} color="red" text="Example 3" />
    <Text fontWeight="bold" fontSize={28} color="red" t18n="Tenu.dashboard" />
```




