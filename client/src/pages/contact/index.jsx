import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '联系'
  }
  constructor(){
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtTabBar
          tabList={[
            { title: '待办事项', text: 8 },
            { title: '拍照' },
            { title: '通讯录', dot: true }
          ]}
          fixed={true}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
