/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-13 17:58:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/reducers/index.ts
 */
import { combineReducers } from 'redux'
import home from './home';
import loading from './loading';

export default combineReducers({
    home,
    loading
})
