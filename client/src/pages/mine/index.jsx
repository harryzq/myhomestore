import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import './index.scss'

export default class Mine extends Component {

  constructor(){
    this.state = {
      current: 0
    }
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>Search</View>
    )
  }
}
