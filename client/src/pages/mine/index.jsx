import Taro, { Component } from '@tarojs/taro'
import { View, OpenData,Button} from '@tarojs/components'
import { AtAvatar,AtButton,AtIcon,AtModal,AtToast,AtInput,AtModalHeader,AtModalAction }  from 'taro-ui'
import './index.scss'

export default class Mine extends Component {

  constructor(){
    this.state = {
      userInfo: null,
      isOpened:false,
      phoneNumber:null,
      isPhoneWrong:false,
      isRegisted:false,
    }
  }

  componentDidMount () {
    // Taro.cloud
    //     .callFunction({
    //       name: "login",
    //       data: {}
    //     })
    //     .then(res => {
    //       console.log(res.result)
    //       this.setState({
    //         userInfo: res.result
    //       })
    //     })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getInfo(info){
    const userInfo = info.detail.userInfo
    this.setState({
      userInfo:userInfo,
      isOpened:true
    })
  }
  closeModal(){
    this.setState({
      isOpened:false
    })
  }
  handelPhoneNumber(phone){
    this.setState({
      phoneNumber:phone,
      isPhoneWrong:false,
    })
  }
  handkePhoneOk(){
    if(!(/^1[3456789]\d{9}$/.test(this.state.phoneNumber))){
      this.setState({
        isPhoneWrong:true
      })
    }else{
      this.setState({
        isPhoneWrong:false,
        isRegisted:true
      })
      this.closeModal()
    }
    
  }
  render () {
    const {userInfo, isRegisted,isOpened,isPhoneWrong} = this.state
    return (
      <View>
        <View className='_mine_wall'>
            <AtAvatar size='large' circle openData={{type:'userAvatarUrl'}}></AtAvatar>
            <View><OpenData type='userNickName' /></View>
            <AtButton circle type='secondary' size='small' openType='getUserInfo' onGetUserInfo={this.getInfo.bind(this)}>立即登陆</AtButton>
        </View>
        <View className='_mine_second'>
            <View className='_mine_likes'>
            <AtIcon value='star' size='25' color='#6190E8'></AtIcon>我的收藏</View>
            <View className='_mine_contact'>
            <AtIcon value='iphone' size='25' color='#6190E8'></AtIcon>联系我们</View>
        </View>
        <View className='feedback'>反馈提交<AtIcon value='help' size='20' color='#ccc'></AtIcon></View>

        <AtModal isOpened={isOpened}> 
          <AtModalHeader>请输入手机号</AtModalHeader>
          {/* <AtModalContent> */}
          <AtInput
            name='手机号'
            border={false}
            title='手机号'
            type='phone'
            placeholder='请输入手机号码'
            value={this.state.phoneNumber}
            onChange={this.handelPhoneNumber.bind(this)}
          ></AtInput>
          {/* </AtModalContent> */}
          <AtModalAction><Button onClick={this.handkePhoneOk.bind(this)}>确定</Button> </AtModalAction>
        </AtModal>

        <AtToast isOpened={isPhoneWrong} text='手机号输入有误' duration={1000} icon='close-circle'></AtToast>
        <AtToast isOpened={isRegisted} text='注册成功' duration={1000} icon='check-circle'></AtToast>
      </View>
    )
  }
}
