import { RouterPathName } from '../constants'

function routerPathName(state = { arr:['1'],collapsed:false}, action) {
    //改变路由状态
    if (action.type === RouterPathName) {//判断类型
        if(action.arr[0]!==''){
           return { 
                        arr:action.arr,
                        collapsed:action.collapsed,
                        subMenuOpen:action.subMenuOpen
                    }
        }
        
    } 
    return state
}
//导出该纯函数，
export default routerPathName
