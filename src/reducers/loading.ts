/*
 * @Author: your name
 * @Date: 2020-04-13 17:41:09
 * @LastEditTime: 2020-04-13 23:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/reducers/loading.ts
 */

import { produce } from 'immer';
import {CHANGE_LOADING} from '../constants/loading';
import { LoadingStateType } from '../commonType';

const defaultState: LoadingStateType = {
    loading: true
}

export default function loading (state = defaultState, action) {
    switch (action.type) {
        case CHANGE_LOADING:
            return produce(state, draftState => {
                draftState.loading = action.data
            })
        default:
            return state;
    }
}
