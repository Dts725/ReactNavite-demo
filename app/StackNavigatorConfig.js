import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

// 默认横向跳转
// 如果即将要跳转到的页面需要其它跳转方式
// 可在路由参数中传入 transition参数，可选值有：forHorizontal,forVertical,forFadeFromBottomAndroid,forFade
// 示例定义竖向跳转：this.props.navigation.push('ProdDetail', {'prodID': item.id, 'transition':'forVertical'})
const screenInterpolater = (sceneProps) => {
    const { route } = sceneProps.scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
};

const StackNavigationConfig = {
    initialRouteName: 'MainTab',
    headerMode: 'float',
    transitionConfig:() => ({
        //screenInterpolater: screenInterpolater
        screenInterpolater:{
            initialRouteName: 'Home',
            initialRouteParams: {initPara: '初始页面参数'},
            navigationOptions: {
              title: '标题',
              headerTitleStyle: {fontSize: 18, color: 'red'},
              headerStyle: {height: 49},
            },
            paths: 'page/main',
            mode: 'card',
            headerMode: 'screen',
            cardStyle: {backgroundColor: "#ffffff"},
            transitionConfig: (() => ({
            })),
            onTransitionStart: (() => {
              console.log('页面跳转动画开始')
            }),
            onTransitionEnd: (() => {
              console.log('页面跳转动画结束')
            }),
        }
    })
}

export default StackNavigationConfig;

