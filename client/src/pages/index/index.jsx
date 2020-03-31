import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtTabBar}  from 'taro-ui'
import Home from '../home'
import Contact from '../contact'
import Search from '../search'
import Mine from '../mine'
import './index.scss'
import {TabContext} from '../create-context'

export default class Index extends Component {
  constructor(){
    this.config = {
      navigationBarTitleText: '腾兴家具'
    }
    this.state = {
      currentTab: 0,
    }
  }

  handleClickTab (value) {
    this.setState({
      currentTab:value
    })
  }
  static contextType = TabContext

  getData(){

  }
   
  render () {
    const {currentTab} = this.state
    const updateCurrentTab=(tabIdx)=>{
      this.setState({
        currentTab:tabIdx
      })
    }
    let currentPage = null
      if(currentTab===0){
        currentPage = <Home></Home>
      }
      if(currentTab===1){
        currentPage = <Search></Search>
      }
      if(currentTab===2){
        currentPage = <Contact></Contact>
      }
      if(currentTab===3){
        currentPage = <Mine></Mine>
      }
    return (
      <TabContext.Provider value={{
        currentTab:this.currentTab,
        updateCurrentTab:updateCurrentTab
      }}
      >
      <View className='index'>
              {currentPage}
              {/* 底部tab */}
              <AtTabBar
                tabList={[
                  { title: "目录", iconType: "list" },
                  { title: "搜索", iconType: "search" },
                  { title: "联系", iconType: "phone" },
                  { title: "我的", iconType: "user" }
                ]}
                fixed
                onClick={this.handleClickTab.bind(this)}
                current={this.state.currentTab}
              />
            </View>
      </TabContext.Provider>
      
    );
  }
}
