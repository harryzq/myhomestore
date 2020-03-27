import Taro, { Component } from '@tarojs/taro'
import { View, Map } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import './index.scss'
import location from '../../assets/icons/location.png';

export default class Index extends Component {

  constructor(){
    this.state = {
      phoneNumber: 1327331232,
      markers: [{
        iconPath: location,
        id: 0,
        latitude: 32.26758089,
        longitude: 120.31350045,
        width: 20,
        height: 20
      }],
    }
  }

  componentWillMount () { }

  componentDidMount () {
  
  }

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
  onTap(){
//     address: "江苏省泰州市泰兴市"
// errMsg: "chooseLocation:ok"
// latitude: 32.267580899
// longitude: 120.31350045
// name: "腾兴家具"
    // Taro.chooseLocation({
    //   complete:(res)=>{
    //     console.log(res)
    //   }
    // })
    Taro.getLocation({
      type: 'gcj02', //返回可以用于 Taro.openLocation的经纬度
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        Taro.openLocation({
          latitude: 32.267580899,
          longitude: 120.31350045,
          scale: 18
        })
      }
     })
  }
  render () {
    const {phoneNumber,markers} = this.state
    return (
      <View className='_contact_warp'>
        <View>
          添加微信
        </View>
        <View onClick={this.makePhoneCall.bind(this)}>拨打电话：{phoneNumber}</View>
        <Map className='map'  scale='18' markers={markers} longitude='120.31350045' latitude='32.267580899'  showLocation enableZoom enableRotate showCompass onClick={this.onTap} />
      </View>
    )
  }
}
