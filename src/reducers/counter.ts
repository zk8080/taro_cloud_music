/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-09 14:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/reducers/counter.ts
 */
import { produce } from 'immer';
import { ADD, MINUS } from '../constants/counter';


const INITIAL_STATE = {
    num: 0
}

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return produce(state, draftState => {
                draftState.num++
            })
        case MINUS:
            return produce(state, draftState => {
                draftState.num--
            })
        default:
            return state
    }
}
