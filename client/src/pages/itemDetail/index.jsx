import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem  } from '@tarojs/components'
import './index.scss'
import a from '../../assets/images/a.png'

export default class Index extends Component {

  constructor(){
    this.config = {
      navigationBarTitleText: '家具详情'
    }
    this.state = {
      phoneNumber: 0
    }
  }

  render () {
    return (
     <View>
        <View>
        {/* 轮播图 */}
      <Swiper
        className='_home_swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem className='_home_swiper_item'>
          <Image src={a} mode='widthFix'></Image>
        </SwiperItem>
        <SwiperItem className='_home_swiper_item'>
        <Image src={a} mode='widthFix'></Image>
        </SwiperItem>
        <SwiperItem className='_home_swiper_item'>
        <Image src={a} mode='widthFix'></Image>
        </SwiperItem>
      </Swiper>

      <View className='_home_items_warps'>
      </View>
      </View>
     </View>
    )
  }
}
