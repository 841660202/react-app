// 将服务器数据传到store的有效载荷Action通过dispatch()将action传入store
import {SERVERADDRESS}from '../constants'
import { push } from 'react-router-redux'

import { message } from 'antd';
//发送登录信息请求
export function sendLoginInfo(){
    console.info("fetch")
}
