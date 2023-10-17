# Global component:
 - This component resolve issue show multi modal and nested modal (one close and one open)

## Origin Repo: 
 - [react-native-global-modal](https://github.com/susonthapa/react-native-global-modal?source=post_page-----bff03b8a33--------------------------------)

### Dependencies:
 - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/): Follow this document to setup reanimated

### Props:
 - skipQueue?: boolean;
 - modalKey?: string;
 - hideClose?: boolean;
 - Component: React.FC;

### Usage:

> You should define this component as global modal in app.tsx

 - To show a modal: no need to wrap child component with modal, because modal component will do this.
 ```    
    showGlobalModal({
        Component: () => (<View>
                {
                    UI code
                }
            </View>),
         modalKey: '123',
})
```
 - To hide a modal: 
```
    hideGlobalModal("123")
```
 - Show multi modal: check example + origin repo

### Demo: 
 - ![Video demo](https://i.imgur.com/CILsSgx.gif)




