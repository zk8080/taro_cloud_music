/*
 * @Author: your name
 * @Date: 2020-04-13 17:46:27
 * @LastEditTime: 2020-04-13 17:48:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/actions/loading.ts
 */

import { CHANGE_LOADING } from '../constants/loading';

interface changeLoadingType{
    type: typeof CHANGE_LOADING,
    data: boolean
}

export const changeLoading = (data: boolean): changeLoadingType => ({
    type: CHANGE_LOADING,
    data
})
