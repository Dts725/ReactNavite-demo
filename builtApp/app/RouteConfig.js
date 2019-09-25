"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* 导入视图
*/
var react_native_1 = require("react-native");
var TabNavigator_1 = require("./TabNavigator");
var NewsDetail_1 = require("./page/table/NewsDetail");
var VideoDetail_1 = require("./page/table/VideoDetail");
var NewsSearch_1 = require("./page/table/NewsSearch");
var mine_1 = require("./page/table/mine");
/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

*/
var styles = react_native_1.StyleSheet.create({
    navigator: {
        backgroundColor: 'green'
    },
    navigatorTitle: {
        color: 'red'
    },
    headerTintColor: {
        color: 'blue'
    }
});
var RouteConfig = {
    MainTab: {
        screen: TabNavigator_1.default.MainTab,
        navigationOptions: function (_a) {
            var navigation = _a.navigation, screeProps = _a.screeProps;
            return ({
                //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
                //设置StackNavigator属性
                header: null,
                headerTitle: '首页',
                headerStyle: styles.navigator,
                headerTintColor: styles.headerTintColor,
                headerTitleStyle: styles.navigatorTitle,
                gesturesEnabled: true,
                //这里设置Tabbar不同页面可能会不同的属性
                tabBarVisible: true,
                tabBarLabel: '首页',
                tabBarIcon: (function (_a) {
                    var tintColor = _a.tintColor, focused = _a.focused;
                    return (<react_native_1.Image source={{ uri: 'http://pic.51yuansu.com/pic3/cover/03/06/15/5b2cb0bceb281_610.jpg' }} style={{ width: 20, height: 20 }}/>);
                }),
            });
        }
    },
    // 下面三个页面我需要隐藏导航栏
    NewsDetail: {
        screen: NewsDetail_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({ header: null, gesturesEnable: true });
        }
    },
    VideoDetail: {
        screen: VideoDetail_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({ header: null, gesturesEnable: true });
        }
    },
    NewsSearch: {
        screen: NewsSearch_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({ header: null, gesturesEnable: true });
        }
    },
    Mine: {
        screen: mine_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({ header: null, gesturesEnable: true });
        }
    }
};
exports.default = RouteConfig;
