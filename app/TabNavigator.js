import { TabNavigator } from 'react-navigation'
import Home from './page/index/Home'
import Live from './page/index/Live'
import Mine from './page/index/Mine'
import Video from './page/index/Video'

export default MainTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:({navigation, screeProps}) => ({
            //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

            //设置StackNavigator属性
            header:null,
            headerTitle: '首页',
            headerStyle: styles.navigator,
            headerTitleStyle: styles.navigatorTitle,
            gesturesEnabled:true,

            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            tabBarLabel:'首页',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image 
                        source={focused ? MainTabSelectedIcon : MainTabUnSelectedIcon}
                        style={styles.tabbarImage} 
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
                        source={focused ? LiveTabSelectedIcon : LiveTabUnSelectedIcon}
                        style={styles.tabbarImage} 
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
                        source={focused ? VideoTabSelectedIcon : VideoTabUnSelectedIcon}
                        style={styles.tabbarImage} 
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
                        source={focused ? MineTabSelectedIcon : MineTabUnSelectedIcon}
                        style={styles.tabbarImage} 
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

