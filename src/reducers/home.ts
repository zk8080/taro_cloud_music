/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-13 17:52:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/reducers/counter.ts
 */
import { produce } from 'immer';
import { CHANGE_BANNER, CHNAGE_RECOMMEND } from '../constants/home';
import { HomeStateType } from '../commonType';

const INITIAL_STATE: HomeStateType = {
    bannerList: [],
    recommendList: []
}

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_BANNER:
            return produce(state, draftState => {
                draftState.bannerList = action.data;
            })
        case CHNAGE_RECOMMEND:
            return produce(state, draftState => {
                draftState.recommendList = action.data;
            })
        default:
            return state
    }
}
