import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem,Text } from '@tarojs/components'
import {AtSegmentedControl,AtIcon }  from 'taro-ui'
import {TabContext} from '../create-context'
import './index.scss'
import a from '../../assets/images/a.png'
import canting from '../../assets/icons/canting.svg'
import ertong from '../../assets/icons/ertong.svg'
import keting from '../../assets/icons/keting.svg'
import woshi from '../../assets/icons/woshi.svg'
import shufang from '../../assets/icons/shufang.svg'
import qita from '../../assets/icons/qita.svg'
import canting2 from '../../assets/icons/canting2.svg'
import ertong2 from '../../assets/icons/ertong2.svg'
import keting2 from '../../assets/icons/keting2.svg'
import woshi2 from '../../assets/icons/woshi2.svg'
import shufang2 from '../../assets/icons/shufang2.svg'
import qita2 from '../../assets/icons/qita2.svg'

export default class Index extends Component {
  constructor(){
    this.state = {
      roomStyle:[],
      currentRoom:'0'
    }
  }
  componentWillMount () {
    this.handleClickRoom()
  }
  static contextType = TabContext

  handleClickRoom (value) {
    let current = value || '0'
    if(value &&value.target){
      current = value.target.dataset['room']
    }
    this.setState({
      currentRoom: current
    })
    switch (Number(current)) {
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
    const {roomStyle,currentRoom} = this.state
    
    const listItems = roomStyle.map((n)=>{
      return( <View className='_home_items_warp' data-idx={n} key={n} onClick={this.handleCardClick.bind(this)}>
      <View data-idx={n}>
        <View data-idx={n} className='_item_name'>家庭加大大衣橱</View>
        <View data-idx={n} className='_item_desc'>高100cm 宽100cm 长1000cm</View>
        <View data-idx={n} className='_item_desc'>适合家里房子大</View>
        {/* <View data-idx={n} className='_item_price'>¥99999</View> */}
        <View data-idx={n} className='_item_id'>产品ID:12321312</View>
        <View className='_item_action'>
          <View data-event='want' className='_item_like' onClick={this.handleCardClick.bind(this)}><AtIcon value='heart' size='16' color='#F00'></AtIcon>收藏</View>
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
          <View className='_home_room_menu' onClick={this.handleClickRoom.bind(this)}>
            <View className={currentRoom==='0' ? '_room_warp_active _room_warp' :'_room_warp'} data-room='0'>
              <Image data-room='0' src={currentRoom==='0' ? woshi :woshi2}></Image>
              <Text data-room='0' >卧室</Text>
            </View>

            <View className={currentRoom==='1' ? '_room_warp_active _room_warp' :'_room_warp'} data-room='1'>
              <Image data-room='1' src={currentRoom==='1' ?  keting :keting2}></Image>
              <Text data-room='1'>客厅</Text>
            </View>

            <View className={currentRoom==='2' ? '_room_warp_active _room_warp' :'_room_warp'} data-room='2'>
              <Image data-room='2' src={currentRoom==='2' ? canting:canting2}></Image>
              <Text data-room='2' >餐厅</Text>
            </View>

            <View className={currentRoom==='3' ? '_room_warp_active _room_warp' :'_room_warp'} data-room='3'>
              <Image data-room='3' src={currentRoom==='3' ? ertong :ertong2}></Image>
              <Text data-room='3'>儿童</Text>
            </View>

            <View className={currentRoom==='4' ? '_room_warp_active _room_warp' :'_room_warp'} data-room='4'>
              <Image data-room='4' src={currentRoom==='4' ? shufang: shufang2}></Image>
              <Text data-room='4' >书房</Text>
            </View>

            <View className={currentRoom==='5' ? '_room_warp_active _room_warp' :'_room_warp'} data-room='5'>
              <Image data-room='5' src={currentRoom==='5'? qita : qita2}></Image>
              <Text data-room='5'>其他</Text>
            </View>
          </View>
        </View>
        <View className='_home_items_warps'>
          {listItems}
        </View>
        </View>
      </View>
    );
  }
}
