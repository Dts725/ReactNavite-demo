"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_tabs_1 = require("react-navigation-tabs");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Home_1 = require("./page/index/Home");
var Live_1 = require("./page/index/Live");
var Mine_1 = require("./page/index/Mine");
var Video_1 = require("./page/index/Video");
var styles = react_native_1.StyleSheet.create({
    navigator: {
    //  backgroundColor : 'green'
    },
    navigatorTitle: {
    //   color: 'red'
    },
    headerTintColor: {
    // color : 'blue'
    }
});
exports.MainTab = react_navigation_tabs_1.createBottomTabNavigator({
    Home: {
        screen: Home_1.default,
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
    Live: {
        screen: Live_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation, screeProps = _a.screeProps;
            return ({
                //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
                //设置StackNavigator属性
                header: null,
                headerTitle: '直播',
                headerStyle: styles.navigator,
                headerTitleStyle: styles.navigatorTitle,
                gesturesEnabled: true,
                //这里设置Tabbar不同页面可能会不同的属性
                tabBarVisible: true,
                tabBarLabel: '直播',
                tabBarIcon: (function (_a) {
                    var tintColor = _a.tintColor, focused = _a.focused;
                    return (<react_native_1.Image source={{ uri: 'https://img.shouji.com.cn/simg/20160530/8329722505.png' }} style={{ width: 20, height: 20 }}/>);
                }),
            });
        }
    },
    Video: {
        screen: Video_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation, screeProps = _a.screeProps;
            return ({
                //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
                //设置StackNavigator属性
                header: null,
                headerTitle: '视频',
                headerStyle: styles.navigator,
                headerTitleStyle: styles.navigatorTitle,
                gesturesEnabled: true,
                //这里设置Tabbar不同页面可能会不同的属性
                tabBarVisible: true,
                tabBarLabel: '视频',
                tabBarIcon: (function (_a) {
                    var tintColor = _a.tintColor, focused = _a.focused;
                    return (<react_native_1.Image source={{ uri: 'http://bpic.588ku.com//element_pic/19/03/20/cbb9cae58a1bf7c657e90642de7dd74e.jpg' }} style={{ width: 20, height: 20 }}/>);
                }),
            });
        }
    },
    Mine: {
        screen: Mine_1.default,
        navigationOptions: function (_a) {
            var navigation = _a.navigation, screeProps = _a.screeProps;
            return ({
                //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
                //设置StackNavigator属性
                header: null,
                headerTitle: '我的',
                headerStyle: styles.navigator,
                headerTitleStyle: styles.navigatorTitle,
                gesturesEnabled: true,
                //这里设置Tabbar不同页面可能会不同的属性
                tabBarVisible: true,
                tabBarLabel: '我的',
                tabBarIcon: (function (_a) {
                    var tintColor = _a.tintColor, focused = _a.focused;
                    return (<react_native_1.Image source={{ uri: 'http://shejiye.com/uploadfile/icon/2017/0203/shejiyeiconusssd4wmenv.png' }} style={{ width: 20, height: 20 }}/>);
                }),
            });
        }
    }
}, {
    //这里设置的是一般情况下Tabbar共同的属性
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    initialRouteName: '',
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#d81e06',
        inactiveTintColor: '#515151',
        labelStyle: {
            fontSize: 12,
        },
    }
});
