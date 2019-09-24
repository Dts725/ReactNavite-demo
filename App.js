import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import RouteConfig from './app/RouteConfig'
import StackNavigatorConfig from './app/StackNavigatorConfig'
let Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig);
Navigator = createAppContainer(Navigator)

 class App extends PureComponent {
  render() {
    return (

      <Navigator />

    )
  }
}

export default App