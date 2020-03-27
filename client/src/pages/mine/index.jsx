import Taro, { Component } from '@tarojs/taro'
import { View, OpenData } from '@tarojs/components'
import { AtAvatar,AtButton,AtIcon }  from 'taro-ui'
import './index.scss'

export default class Mine extends Component {

  constructor(){
    this.state = {
      userInfo: 0
    }
  }

  componentDidMount () {
    Taro.cloud
        .callFunction({
          name: "login",
          data: {}
        })
        .then(res => {
          console.log(res.result)
          this.setState({
            userInfo: res.result
          })
        })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {userInfo} = this.state
    return (
      <View>
        <View className='_mine_wall'>
            <AtAvatar size='large' circle openData={{type:'userAvatarUrl'}}></AtAvatar>
            <View><OpenData type='userNickName' /></View>
            <AtButton circle type='secondary' size='small'>立即登陆</AtButton>
        </View>
        <View className='_mine_second'>
            <View className='_mine_likes'>
            <AtIcon value='star' size='25' color='#6190E8'></AtIcon>我的收藏</View>
            <View className='_mine_contact'>
            <AtIcon value='iphone' size='25' color='#6190E8'></AtIcon>联系我们</View>
        </View>
        <View className='feedback'>反馈提交<AtIcon value='help' size='20' color='#ccc'></AtIcon></View>
      </View>
    )
  }
}
