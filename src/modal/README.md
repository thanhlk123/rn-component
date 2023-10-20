# Resolve issue show modal after a modal hide

# Modal component:
 - Modal component to reuse.

### Dependencies: 
 - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/): Follow this document to setup reanimated
 - [@gorhom/portal](https://www.npmjs.com/package/@gorhom/portal)

### Set up:
 - Because we you portal to show modal, please setup <PortalProvider/> + <PortalHost/> in app.tsx global

### Props:
 - children?: ReactElement; //Content of modal
 - isVisible: boolean; //Show/hide modal
 - backdropOpacity?: number;
 - backdropColor?: string;
 - customBackDrop?: ReactElement;
 - entering?: typeof ComplexAnimationBuilder | ComplexAnimationBuilder; //Modal show animation
 - style?: ViewStyle | ViewStyle[];
 - onModalWillHide?: () => void;
 - onModalHide?: () => void;
 - onModalWillShow?: () => void;
 - onModalShow?: () => void;
 - onBackdropPress?: () => void;
 - onBackButtonPress?: () => void;
 
### Animated entering/exiting: 
 - [animation entering/exiting](https://docs.swmansion.com/react-native-reanimated/docs/2.x/api/LayoutAnimations/entryAnimations/)
 - Example: 
 ```
    import {SlideInDown} from 'react-native-reanimated';
    <Modal entering={SlideInDown}>
        {todo}
    </Modal>
 ```

### Demo:
 - ![Modal Demo](https://i.imgur.com/tjVRx2d.gif)

