import * as constants from '../constants';//API
import * as basicAction from '../fetch';

// 显示对话框
export function ShowModal(innerComponentType,title){
  return {
    type :constants.SHOWMODAL,
    data :innerComponentType,
    title:title
  }
}
// 隐藏对话框
export function HideModal(){
  return {
    type :constants.HIDEMODAL
  }
}
