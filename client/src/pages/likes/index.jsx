import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtSearchBar,AtIcon }  from 'taro-ui'
import './index.scss'
import a from '../../assets/images/a.png'

export default class Search extends Component {

  constructor(){
    this.state = {
      searchVal: '',
      searchResult:[]
    }
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onSearchChange (value) {
    this.setState({
      searchVal: value
    })
  }

  onSearchClick () {
    this.setState({
      searchResult: [...Array(10).keys()]
    })
    console.log('开始搜索')
  }
  render () {
    const {searchResult} = this.state
    const listItems = searchResult.map((n)=>{
      return( <View className='_home_items_warp' key={n}>
      <View>
        <View className='_item_name'>家庭加大大衣橱</View>
        <View className='_item_desc'>高100cm 宽100cm 长1000cm</View>
        <View className='_item_desc'>适合家里房子大</View>
        <View className='_item_price'>¥99999</View>
        <View className='_item_id'>产品ID:12321312</View>
        <View className='_item_action'>
          <View className='_item_like'><AtIcon value='heart' size='16' color='#F00'></AtIcon>想要</View>
          <View className='_item_buy'>立即购买</View>
        </View>
      </View>
    <Image src={a} ></Image>
  </View>)
    })
    return (
      <View className='_search'>
        <AtSearchBar
          fixed
          showActionButton
          value={this.state.searchVal}
          onChange={this.onSearchChange.bind(this)}
          onActionClick={this.onSearchClick.bind(this)}
        />
        <View className='_home_items_warps'>
        {listItems}
        </View>
       
      </View>
    )
  }
}
