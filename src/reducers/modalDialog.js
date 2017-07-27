import { SHOWMODAL, HIDEMODAL } from '../constants'

function switchModal(state = { visable: false, innerComponentType: 'login' }, action) {
    //console.log('switchModal in reducers,state is ', state, 'action is ', action);
    //对话框显示
    if (action.type === SHOWMODAL) {
        return { visable: true,innerComponentType:action.data,title:action.title }
        //return Object.assign({},state,{visable: true,innerComponentType:action.data,title:action.title})
    // 对话框隐藏
    } else if (action.type === HIDEMODAL) {
        return { visable: false }
    }
    return state
}
//导出该纯函数，
export default switchModal
