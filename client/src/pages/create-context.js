import Taro from '@tarojs/taro'

export const TabContext =  Taro.createContext({
    currentTab: 0,
})

export const LikeContext = Taro.createContext({
    like: 0,
})