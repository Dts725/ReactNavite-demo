import { createBottomTabNavigator } from 'react-navigation-tabs'
import React from "react"
import {Image,StyleSheet} from 'react-native'

import Home from './page/index/Home'
import Live from './page/index/Live'
import Mine from './page/index/Mine'
import Video from './page/index/Video'
const styles = StyleSheet.create({
    navigator: {
    //  backgroundColor : 'green'
    },
    navigatorTitle: {
    //   color: 'red'
    },
    headerTintColor : {
        // color : 'blue'
    }
  });
exports.MainTab = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions:({navigation, screeProps}) => ({
            //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

            //设置StackNavigator属性
            header:null,
            headerTitle: '首页',
            headerStyle: styles.navigator,
            headerTintColor : styles.headerTintColor,
            headerTitleStyle: styles.navigatorTitle,
            gesturesEnabled:true,

            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            tabBarLabel:'首页',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                    source={{uri : 'http://pic.51yuansu.com/pic3/cover/03/06/15/5b2cb0bceb281_610.jpg'}}
                    style = {{width:20,height:20}}
                    
                />
                )
            }),
        })
    },
    Live: {
        screen: Live,
        navigationOptions:({navigation, screeProps}) => ({
            //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

            //设置StackNavigator属性
            header:null,
            headerTitle: '直播',
            headerStyle:styles.navigator,
            headerTitleStyle:styles.navigatorTitle,
            gesturesEnabled:true,

            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            tabBarLabel:'直播',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                    source={{uri : 'https://img.shouji.com.cn/simg/20160530/8329722505.png'}}
                    style = {{width:20,height:20}}
                    
                />
                )
            }),
        })
    },
    Video: {
        screen: Video,
        navigationOptions:({navigation, screeProps}) => ({
            //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

            //设置StackNavigator属性
            header:null,
            headerTitle: '视频',
            headerStyle:styles.navigator,
            headerTitleStyle:styles.navigatorTitle,
            gesturesEnabled:true,

            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            tabBarLabel:'视频',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                    source={{uri : 'http://bpic.588ku.com//element_pic/19/03/20/cbb9cae58a1bf7c657e90642de7dd74e.jpg'}}
                    style = {{width:20,height:20}}
                    
                />
                )
            }),
        })
    },
    Mine: {
        screen: Mine,
        navigationOptions:({navigation, screeProps}) => ({
            //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

            //设置StackNavigator属性
            header:null,
            headerTitle: '我的',
            headerStyle:styles.navigator,
            headerTitleStyle:styles.navigatorTitle,
            gesturesEnabled:true,

            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            tabBarLabel:'我的',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                        source={{uri : 'http://shejiye.com/uploadfile/icon/2017/0203/shejiyeiconusssd4wmenv.png'}}
                        style = {{width:20,height:20}}
                        
                    />
                )
            }),
        })
    }
},{
    //这里设置的是一般情况下Tabbar共同的属性
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
          activeTintColor:'#d81e06', // label和icon的前景色 活跃状态下（选中）。
          inactiveTintColor:'#515151', // label和icon的前景色 不活跃状态下(未选中)。
          labelStyle:{
              fontSize: 12,
          }, //label的样式。
    }
})

