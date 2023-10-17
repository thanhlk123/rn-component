/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AutomaticModal from './example-modals/automatic-modal';
import Confirmation from './example-modals/confirmation-modal';

import GlobalModal, {
  hideGlobalModal,
  showGlobalModal,
} from './components/global-modal';

function GlobalModalIntegrate(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View
          style={{
            alignItems: 'center',
            height: '100%',
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              fontSize: 32,
              color: 'gray',
              fontWeight: 'bold',
            }}>
            Global Dialog Test
          </Text>
          <Button
            title="Open 3 Modals"
            onPress={() => {
              showGlobalModal({
                Component: AutomaticModal,
              });
            }}
          />
          <Button
            title="Nested Modal"
            onPress={() => {
              showGlobalModal({
                Component: () => (
                  <Confirmation
                    onCancelPress={() => hideGlobalModal('confirmation-modal')}
                    onYesPress={() => hideGlobalModal('confirmation-modal')}
                  />
                ),
              });
            }}
          />
          <Button
            title="Nested Modal"
            onPress={() => {
              showGlobalModal({
                Component: () => (
                  <Button
                    title="heheheheheh"
                    onPress={() => {
                      hideGlobalModal('123');
                      showGlobalModal({
                        Component: () => {
                          return (
                            <View
                              style={{
                                width: 300,
                                height: 300,
                                backgroundColor: 'pink',
                              }}
                            />
                          );
                        },
                      });
                    }}
                  />
                ),
                modalKey: '123',
              });
            }}
          />
        </View>

        <GlobalModal />
      </SafeAreaView>
    </>
  );
}

export default GlobalModalIntegrate;
