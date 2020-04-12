/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-12 22:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/reducers/counter.ts
 */
import { produce } from 'immer';
import { CHANGE_BANNER, CHANGE_LOADING, CHNAGE_RECOMMEND } from '../constants/home';
import { HomeStateType } from '../commonType';

const INITIAL_STATE: HomeStateType = {
    bannerList: [],
    recommendList: [],
    loading: true
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
        case CHANGE_LOADING:
            return produce(state, drafteState => {
                drafteState.loading = action.data;
            })
        default:
            return state
    }
}
