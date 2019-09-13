/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ApplicationProvider} from 'react-native-ui-kitten';
import NavigationService from './NavigationService';
import {mapping, light as theme} from '@eva-design/eva';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';

const StacksContainer = createStackNavigator({
  SignUp,
  Home,
},{
  headerMode:'none'
});

const AppContainer = createAppContainer(StacksContainer);

const App = () => (
  <ApplicationProvider mapping={mapping} theme={theme}>
    <AppContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </ApplicationProvider>
);

export default App;
