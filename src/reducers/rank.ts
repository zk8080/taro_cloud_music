/*
 * @Author: your name
 * @Date: 2020-04-13 16:01:40
 * @LastEditTime: 2020-04-14 17:32:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/reducers/rank.ts
 */
import { produce } from 'immer';
import { RankStateType } from '../commonType';
import { CHANGE_RANK } from '../constants/rank';

const defaultState: RankStateType = {
    rankList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_RANK:
            return produce(state, draft => {
                draft.rankList = action.data
            })
        default:
            return state;
    }
}