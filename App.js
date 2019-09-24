import React, { PureComponent } from 'react';

import { StackNavigator } from 'react-navigation'
import RouteConfig from './app/RouteConfig'
import StackNavigatorConfig from './app/StackNavigatorConfig'

const Navigator = StackNavigator(RouteConfig, StackNavigatorConfig);

export default class App extends PureComponent {
  render() {
    return (

      <Navigator />

    )
  }
}