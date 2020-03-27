import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  constructor(){
    this.state = {
      phoneNumber: 1327331232
    }
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  makePhoneCall(){
    Taro.makePhoneCall({
      phoneNumber: String(this.state.phoneNumber) //仅为示例，并非真实的电话号码
    }).then(res=>{
      console.log(res)
    })
  }
  render () {
    const {phoneNumber} = this.state
    return (
      <View className='_contact_warp'>
        <View>
          添加微信
        </View>
        <View onClick={this.makePhoneCall.bind(this)}>拨打电话：{phoneNumber}</View>
      </View>
    )
  }
}
