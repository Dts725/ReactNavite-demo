import React from 'react'
import NewsDetail from './page/table/NewsDetail'

import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {StyleSheet}from 'react-native'
const styles = StyleSheet.create({
    blue : {
        color :'blue'
    },
    orange : {
        color :'orange'
    }
})
exports.topTabVar = createMaterialTopTabNavigator({
    NewDetail : {
        screen : NewsDetail,
    }
},{
    headerTitle : "新闻详情"
}) 

