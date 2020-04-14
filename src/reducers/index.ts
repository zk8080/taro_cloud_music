/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-14 17:48:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/reducers/index.ts
 */
import { combineReducers } from 'redux'
import home from './home';
import loading from './loading';
import rank from './rank';

export default combineReducers({
    home,
    loading,
    rank
})
