import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import {AtSegmentedControl,AtIcon }  from 'taro-ui'
import {TabContext} from '../create-context'
import './index.scss'
import a from '../../assets/images/a.png'

export default class Index extends Component {
  constructor(){
    this.state = {
      roomMenu:0,
      roomStyle:[]
    }
  }
  componentWillMount () {
    this.handleClickRoom(0)
  }
  static contextType = TabContext

  handleClickRoom (value) {
    this.setState({
      roomMenu: value
    })
    switch (value) {
      case 0:
        this.setState({
          roomStyle: [...Array(3).keys()]
        });
        break;
      case 1:
        this.setState({
          roomStyle: [...Array(2).keys()]
        });
        break;
      case 2:
        this.setState({
          roomStyle: [...Array(10).keys()]
        });
        break;
      default:
        break;
    }
  }
  handleLike(value){
    console.log(value)
  }

  handleDetail(value){
    console.log(value)
  }
  handleBuyNow(value){
    console.log(value)
  }
  handleCardClick(e){
    const {updateCurrentTab} = this.context
    
    e.stopPropagation();
    const targetData =e.target.dataset
    // 点击卡片
    if(targetData.idx || targetData.idx===0){
      Taro.navigateTo({
        url: '/pages/itemDetail/index'
      })
    }
    // 点击按钮
    if(targetData.event){
      if(targetData.event ==='buy'){
        updateCurrentTab(2)
      }
    }
  }
   
  render () {
    const {roomStyle} = this.state
    
    const listItems = roomStyle.map((n)=>{
      return( <View className='_home_items_warp' data-idx={n} key={n} onClick={this.handleCardClick.bind(this)}>
      <View data-idx={n}>
        <View data-idx={n} className='_item_name'>家庭加大大衣橱</View>
        <View data-idx={n} className='_item_desc'>高100cm 宽100cm 长1000cm</View>
        <View data-idx={n} className='_item_desc'>适合家里房子大</View>
        {/* <View data-idx={n} className='_item_price'>¥99999</View> */}
        <View data-idx={n} className='_item_id'>产品ID:12321312</View>
        <View className='_item_action'>
          <View data-event='want' className='_item_like' onClick={this.handleCardClick.bind(this)}><AtIcon value='heart' size='16' color='#F00'></AtIcon>想要</View>
          <View data-event='buy'className='_item_buy' onClick={this.handleCardClick.bind(this)}>立即购买</View>
        </View>
      </View>
    <Image data-idx={n} src={a} ></Image>
  </View>)
    })
    return (
      <View className='home'>
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

        <View className='_home_room'>
          <AtSegmentedControl
            customStyle='overflow: auto;height:80rpx;line-height:70rpx;'
            className='_home_room_menu'
            values={['卧室', '客厅', '厨房','餐厅','儿童','阳台','书房','其他']}
            onClick={this.handleClickRoom.bind(this)}
            current={this.state.roomMenu}
          />
        </View>
        <View className='_home_items_warps'>
          {listItems}
        </View>
        </View>
      </View>
    );
  }
}
