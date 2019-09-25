/*
* 导入视图
*/
import React from 'react'
import {Image,StyleSheet,Text} from 'react-native'

import MainTab from './TabNavigator'
import NewsDetail from './page/table/NewsDetail'
// import NewsDetail from './TopTabNavigator'
import VideoDetail from './page/table/VideoDetail'
import NewsSearch from './page/table/NewsSearch'
import Mine from './page/table/mine'


/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

*/
const styles = StyleSheet.create({
    navigator: {
     backgroundColor : 'green'
    },
    navigatorTitle: {
      color: 'red'
    },
    headerTintColor : {
        color : 'blue'
    }
  });

const RouteConfig = {
    MainTab: {
        screen:MainTab.MainTab,
        navigationOptions: ({navigation, screeProps}) => (
            {
           //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

           //设置StackNavigator属性
           header:null,
        //    headerTitle: '首页',
           
        //    headerStyle: styles.navigator,

        //    headerTintColor : styles.headerTintColor,
        //    headerTitleStyle: styles.navigatorTitle,
        //    gesturesEnabled:true,

        //    //这里设置Tabbar不同页面可能会不同的属性
        //    tabBarVisible: true,
        //    tabBarLabel:'首页',
        //    tabBarIcon:(({tintColor,focused}) => {
        //        return(
        //            <Image 
        //            source={{uri : 'http://pic.51yuansu.com/pic3/cover/03/06/15/5b2cb0bceb281_610.jpg'}}
        //            style = {{width:20,height:40}}
                   
        //        />
        //        )
        //    }),
       })
    },
   // 下面三个页面我需要隐藏导航栏
    NewsDetail: {
        screen: NewsDetail,
  
        navigationOptions: ({navigation}) => (
            {
                headerTitle : "新闻详情",
                gesturesEnabled : true,
                headerStyle: styles.navigator,
                headerTitleStyle : {
                    color : 'blue'
                },
                headerRight : () => <Text style={{color :'orange'}}>分享</Text>,
                headerRightContainerStyle : {
                    marginRight: 40
                }
                
               
            })
    },
    VideoDetail: {
        screen: VideoDetail,
        navigationOptions: ({navigation}) => ({header:null, gesturesEnable:true})
    },
    NewsSearch: {
        screen: NewsSearch,
        navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    },
    Mine: {
        screen: Mine,
        navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    }
}

export default RouteConfig;

