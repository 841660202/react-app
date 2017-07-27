import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerReducer, routerMiddleware} from 'react-router-redux'
import * as reducers from './reducers'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// import DevTools from './containers/DevTools'

function myCreateStores(history){
	const middleware = routerMiddleware(history);
	const enhancer = compose(
	  //你要使用的中间件，放在前面
	  applyMiddleware(thunkMiddleware,middleware),
	  //必须的！启用带有monitors（监视显示）的DevTools
	//   DevTools.instrument()
	)
	//store维持应用的state,当发起action的时候通过dispatch(action) 调用 reducer
	const store = createStore(
	    combineReducers({
	    	...reducers, // es6扩展运算符
	    	//key 必须为routing
	    	routing: routerReducer
	    }),enhancer
 		//applyMiddleware(thunkMiddleware,middleware)
	)
	return store;
}

export default myCreateStores