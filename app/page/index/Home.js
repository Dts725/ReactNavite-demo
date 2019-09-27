import React, { Component } from "react"
import { View, Text, TextInput, Image, ScrollView, FlatList,Button,TouchableHighlight } from 'react-native'
import { Net } from '../../../utils/Net'
// import { StackNavigator } from 'react-navigation'

// const Navigator = StackNavigator(RouteConfig, StackNavigatorConfig);




// init()

class d extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      flag: false,
      test: "测试数据"
    }
  }
  render() {
    if (this.state.flag) {
      return this.renderList();
    } else {
      return this.renderLoading();
    }
  }

  //获取数据
  async  init() {
    let res = await Net.get('/admin/active/active_list?type=1&is_show=true');


    this.setState(state => {
      return { data: res.data.data.data, flag: true }
    })
    console.log(res.data.data.data[0], '返回结果')

  }
  componentDidMount() {
    this.init();
  }
  renderLoading() {
    return (
      <View>
        <Text>加载中</Text>
      </View>
    )
  }

  Items({ name, index }) {
    return (
      <Text key={index}>{name}</Text>
    )
  }

  //获取数据后展示
  renderList() {
    return (
      <View>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>首页</Text>
        <TextInput style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
          placeholder='此处输入框'
          onChangeText={(text) => {
            console.log(text)
          }}
          value={this.text}
        />


        <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>

          <Image style={
            {

              width: '90%',
              height: 100,

            }
          }

            source={{ uri: 'http://language.chinadaily.com.cn/images/attachement/jpg/site1/20151010/00221910dbb41782b08f47.jpg' }} />
        </View>
        <TouchableHighlight
      style={{ display: 'flex', justifyContent: "center", alignItems: 'center', marginTop: 20 }}
        onPress = { () => {
          console.log('点击图片')
          this.props.navigation.push('NewsDetail')
        }
      }
        >
          <Image style={
            {

              width: '90%',
              height: 100,

            }
          }

            source={require('../../../image/btn.jpg')} 
     
            />
              </TouchableHighlight>
        <View       style={{ display: 'flex', justifyContent: "center", alignItems: 'center', marginTop: 20 }}>

              <Button
            onPress={() => {
             
              this.props.navigation.push('NewsDetail')
            }}
            title="点击跳转新闻详情"
          />
      
        </View>
        
            
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }} key={item.id}>{item.address}</Text>}
          keyExtractor={(item, index) => item.id.toString()}
        />

            
      </View>)
  }



}
export default d;
