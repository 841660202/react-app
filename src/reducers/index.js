import {combineReducers} from "redux"

import switchModal from './modalDialog'
import routerPathName from './routerPathName'

//合并所有的reducer
export const stores = combineReducers({
  modalDialog:switchModal,//切换显示对话框
  routerPathName:routerPathName,//切换路由
})